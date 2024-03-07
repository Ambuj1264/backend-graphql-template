import express, { Router } from "express";
import { privacyPolicy } from "../controller/privacy-policy/privacyPolicy";

const route: Router = express.Router();
route.get("/privacy-policy", privacyPolicy.PP);

export default route;
