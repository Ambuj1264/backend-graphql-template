import { DemoResponse } from "./demoResponse";
import { inputTypes } from "./inputs";
import { userResponse } from "./response/user";
import { root } from "./root";
export const typeDefs = [...inputTypes, root, userResponse, DemoResponse];
