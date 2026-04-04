import { z } from "zod";

export const methodSchema = z.object({
   email: z.string().email("Invalid email format"),
   password: z.string().min(6, "Password must be at least 6 characters"),
});
export type MethodDTO = z.infer<typeof methodSchema>;
