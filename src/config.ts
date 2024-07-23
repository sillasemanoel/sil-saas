export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: "price_1PVzL3JqLDjA7r8aGTiHBTu5",
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: "price_1PVzLQJqLDjA7r8aD4tao3JC",
        quota: {
          TASKS: 100,
        },
      },
    },
  },
};
