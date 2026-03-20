import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "name must be at least 2 chars"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 chars"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
