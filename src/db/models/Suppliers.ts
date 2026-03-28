import { Schema, model } from "mongoose";
import { Supplier } from "types/supplier";

const supplierSchema = new Schema<Supplier>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    suppliers: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Active", "Deactive"], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const SupplierModel = model<Supplier>("Supplier", supplierSchema);
