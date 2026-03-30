import { model, Schema } from "mongoose";
import { Customer } from "../../types/customer";

const customerSchema = new Schema<Customer>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    spent: { type: Number, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    register_date: { type: Date, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const CustomerModel = model<Customer>("Customer", customerSchema);
