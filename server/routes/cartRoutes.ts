import express from "express";
import { getCart, addToCart, updateCartItem, removeCartItem, clearCart } from "../controllers/cartController.js";
import { protect } from "../middleware/auth.js";

const CartRouter = express.Router();

CartRouter.get("/", protect, getCart);
CartRouter.post("/add", protect, addToCart);
CartRouter.put("/item/:productId", protect, updateCartItem);
CartRouter.delete("/item/:productId", protect, removeCartItem);
CartRouter.delete("/", protect, clearCart);

export default CartRouter;
