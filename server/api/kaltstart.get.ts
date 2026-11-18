// How often the Kaltstart voucher was bought, and when last.
// Reads paid Checkout Sessions of the Stripe Payment Link. Needs
// STRIPE_SECRET_KEY (a restricted key with read access to Checkout Sessions
// is enough). Only count and timestamp leave the server, never buyer data.
const PAYMENT_LINK = "plink_1Ud5ciCygSthEvGEn2WmNpPO";

type Session = { id: string; created: number; payment_status: string };

export default defineCachedEventHandler(
  async () => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw createError({ statusCode: 503, message: "Stripe not configured" });
    }

    let count = 0;
    let last: number | null = null;
    let startingAfter: string | undefined;

    // Stripe returns at most 100 per page, newest first
    do {
      const query = new URLSearchParams({
        payment_link: PAYMENT_LINK,
        status: "complete",
        limit: "100",
      });
      if (startingAfter) query.set("starting_after", startingAfter);

      const page = await $fetch<{ data: Session[]; has_more: boolean }>(
        `https://api.stripe.com/v1/checkout/sessions?${query}`,
        { headers: { Authorization: `Bearer ${key}` } },
      );

      for (const session of page.data) {
        if (session.payment_status !== "paid") continue;
        count++;
        last = Math.max(last ?? 0, session.created);
      }

      startingAfter = page.has_more ? page.data.at(-1)?.id : undefined;
    } while (startingAfter);

    return { count, last: last ? new Date(last * 1000).toISOString() : null };
  },
  { maxAge: 5 * 60, name: "kaltstart" },
);
