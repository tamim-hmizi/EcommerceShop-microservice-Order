import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(createOrder).get(getOrders);
router
  .route("/:id")
  .get(getOrderById)
  .put(updateOrderStatus)
  .delete(deleteOrder);

export default router;
