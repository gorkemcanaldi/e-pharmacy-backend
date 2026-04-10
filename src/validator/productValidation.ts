import { ProductCategory } from "../types/product";
import z from "zod";

export const productSchema = z.object({
  photo: z.string().optional(),
  name: z.string().min(2),
  suppliers: z.string().min(2),
  stock: z.coerce.number().min(1),
  price: z.coerce.number().min(1),
  category: z.nativeEnum(ProductCategory),
});
