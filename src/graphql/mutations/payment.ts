import Users from "../../database/model/user";
import yenv from "yenv";
const env = yenv("env.yaml", { env: "development" });
const { SUCCESS_URL, CANCEL_URL, STRIPE_SECRET_KEY } = env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);

export const paymentCheckout = async (_: any, userId: any) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: userId?.userId,
    },
  });
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1OpZdvGQpQXdlvpzzwrhzi7V",
        quantity: 1,
      },
    ],
    mode: "payment",
    customer: customer?.id,
    success_url: SUCCESS_URL,
    cancel_url: CANCEL_URL,
  });

  return session.url;
};

export const subscriptionApproval = async (_: any, arg: any) => {
  try {
    const { userId, type } = arg;
    if (type === "1") {

      return await Users.findOneAndUpdate(
        {
          _id: userId,
          isDeleted: false,
          subscribed: true,
        },
        {
          approved: true,
        }
      );
    } else {

      return await Users.findOneAndUpdate(
        {
          _id: userId,
          isDeleted: false,
          subscribed: true,
        },
        {
          approved: false,
        }
      );
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const subscriptionCheckByUser = async (
  _: any,
  userId: { userId: String }
) => {
  try {
    const findUser = await Users.findOne({
      _id: userId?.userId,
      isDeleted: false,
      approved: true,
    });

    return findUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
