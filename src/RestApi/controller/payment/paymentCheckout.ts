import express, { Router } from "express";
import Stripe from "stripe";

import Users from "../../../database/model/user";
import yenv from "yenv";
import Subscribes from "../../../database/model/subscribe";
const env = yenv("env.yaml", { env: "development" });
const { STRIPE_SECRET_KEY, STRIPE_ENDPOINTSECRET } = env;

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});
const router: Router = express.Router();
interface Session {
  customer: string;
  amount_total: number;
  created: number;
  // other properties of the session object
}
const endpointSecret = STRIPE_ENDPOINTSECRET;

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig: any = request.headers["stripe-signature"];
    // console.log("sig", sig);
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err: any) {
      // console.log("err.message", err.message);
      response.status(400).send(`Webhook Error: ${err.message}`);

      return;
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        // Then define and call a function to handle the event checkout.session.async_payment_failed
        break;
      case "checkout.session.async_payment_succeeded":
        // Then define and call a function to handle the event checkout.session.async_payment_succeeded
        break;
      case "checkout.session.completed":
        const session: Session = event.data.object as Session;
        // console.log(session.amount_total / 100, "session");
        stripe.customers
          .retrieve(session.customer)
          .then(async (customerResponse) => {
            const customer = customerResponse as Stripe.Customer;
            // console.log(customer, "customer");
            // console.log(customer?.balance, "https://line_item_group.total/");

            const customerId = customer.metadata.userId;
            const billingDate = session.created;
            const formattedBillingDate = new Date(
              billingDate * 1000
            ).toISOString();
            const inputDate = new Date(formattedBillingDate);
            // console.log(customer, customerId, "customer ");
            const findUser = await Subscribes.findOne({
              userId: customerId,
            });
            if (!findUser) {
              const updateUserPayment = await Subscribes.create({
                userId: customerId,
                billingDate: inputDate,
                paid: true,
                approved: true,
                amount: session.amount_total / 100,
              });
              await updateUserPayment.save();
              if (updateUserPayment) {
                await Users.findOneAndUpdate(
                  {
                    _id: customerId,
                  },
                  {
                    subscribed: true,
                    approved: true,
                  }
                );
              }
            } else {
              const updatedSub = await Subscribes.findOneAndUpdate(
                {
                  userId: customerId,
                },
                {
                  userId: customerId,
                  billingDate: inputDate,
                  paid: true,
                  approved: true,
                  amount: session.amount_total / 100,
                }
              );
              if (updatedSub) {
                await Users.findOneAndUpdate(
                  {
                    _id: customerId,
                  },
                  {
                    subscribed: true,
                    approved: true,
                  }
                );
              }
            }
          });

        // Then define and call a function to handle the event checkout.session.completed
        break;
      case "checkout.session.expired":
        // Then define and call a function to handle the event checkout.session.expired
        break;
      // ... handle other event types
      default:
      // console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);
export default router;
