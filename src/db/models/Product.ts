import { Schema, model } from "mongoose";
import { Product } from "types/product";

const productSchema = new Schema<Product>(
  {
    photo: { type: String },
    name: { type: String, required: true },
    suppliers: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: [
        "Medicine",
        "Heart",
        "Head",
        "Hand",
        "Leg",
        "Dental Care",
        "Skin Care",
      ],
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const ProductModel = model<Product>("Product", productSchema);
