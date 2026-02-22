import express from "express";
import { createCheckoutSession } from "../controllers/paymentController.js";
import { protect } from "../middleware/auth.js";

const paymentRouter = express.Router();

paymentRouter.post("/checkout-session", protect, createCheckoutSession);

export default paymentRouter;
