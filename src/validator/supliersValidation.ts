import { SuppliersStatus } from "types/supplier";
import z from "zod";

export const supplierSchema = z.object({
  name: z.string().min(2),
  address: z.string(),
  suppliers: z.string(),
  date: z.preprocess((val) => new Date(val as string), z.date()),
  amount: z.number(),
  status: z.nativeEnum(SuppliersStatus),
});
