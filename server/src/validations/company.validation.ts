import { z } from "zod";

export const createCompanySchema = z.object({
  name: z.string().min(3).max(100),

  city: z.string().min(2).max(50),

  location: z.string().min(5),

  foundedOn: z.string(),

  description: z.string().optional(),

  logo: z.string().optional(),
});
