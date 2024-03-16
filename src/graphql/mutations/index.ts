import {
  paymentCheckout,
  subscriptionApproval,
  subscriptionCheckByUser,
} from "./payment";
import { createDemoDetails } from "./demoDetails";

import {
  createUser,
  fogetPassword,
  changePassword,
  createUserByProvider,
} from "./user/login";
export const mutationResolvers = {
  createUser,
  fogetPassword,
  createUserByProvider,
  changePassword,
  createDemoDetails,
  paymentCheckout,
  subscriptionApproval,
  subscriptionCheckByUser,
};
