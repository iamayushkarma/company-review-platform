import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";

import * as reviewService from "../services/review.service";

export const createReview = asyncHandler(
  async (req: Request, res: Response) => {
    const review = await reviewService.createReview(req.body);

    return res
      .status(201)
      .json(new ApiResponse(201, review, "Review added successfully"));
  },
);

export const getCompanyReviews = asyncHandler(
  async (req: Request, res: Response) => {
    const { companyId } = req.params;

    const reviews = await reviewService.getCompanyReviews(companyId as string);

    return res
      .status(200)
      .json(new ApiResponse(200, reviews, "Reviews fetched successfully"));
  },
);
