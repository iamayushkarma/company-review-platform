import { Router } from "express";
import * as reviewController from "../controllers/review.controller.js";

const router = Router();

router.post("/", reviewController.createReview);

router.get("/company/:companyId", reviewController.getCompanyReviews);

router.patch("/:id/like", reviewController.likeReview);

export default router;
