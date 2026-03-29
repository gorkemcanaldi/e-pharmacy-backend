import { model, Schema } from "mongoose";
import { Order } from "types/order";

const orderSchema = new Schema<Order>(
  {
    photo: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    products: { type: Number, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: [
        "Completed",
        "Confirmed",
        "Pending",
        "Cancelled",
        "Processing",
        "Shipped",
        "Delivered",
      ],
      required: true,
    },
    order_date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const OrderModel = model<Order>("Order", orderSchema);
