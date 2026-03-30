import { Schema, model } from "mongoose";
import { IncomeExpense } from "../../types/IncomeExpense";

const IncomeExpenseSchema = new Schema<IncomeExpense>(
  {
    amount: { type: Number, required: true },
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ["Income", "Expense", "Error"],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const IncomeExpenseModel = model<IncomeExpense>(
  "IncomeExpense",
  IncomeExpenseSchema,
);
