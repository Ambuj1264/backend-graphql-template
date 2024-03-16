import { FindDemoToolDetails } from "./demoDetails";

import { verifyToken } from "./tokenVerification";
import {
  login,
  sendMailForForgetPassword,
} from "./user";
export const queryResolvers = {
  login,
  sendMailForForgetPassword,
  verifyToken,
  FindDemoToolDetails
};
