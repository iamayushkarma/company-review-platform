import { z } from "zod";

export const createReviewSchema = z.object({
  company: z.string(),

  fullName: z.string().min(2).max(100),

  subject: z.string().min(3).max(150),

  review: z.string().min(10).max(1000),

  rating: z.number().min(1).max(5),
});
