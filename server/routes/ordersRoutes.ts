import express from "express";
import { getOrders, getOrder, createOrder, updateOrderStatus, getAllOrders } from "../controllers/ordersController.js";
import { protect, authorize } from "../middleware/auth.js";

const OrderRouter = express.Router();

OrderRouter.get("/", protect, getOrders);
OrderRouter.get("/:id", protect, getOrder);
OrderRouter.post("/", protect, createOrder);
OrderRouter.put("/:id/status", protect, authorize("admin"), updateOrderStatus);
OrderRouter.get("/admin/all", protect, authorize("admin"), getAllOrders);

export default OrderRouter;
