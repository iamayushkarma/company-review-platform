import { Review } from "../models/review.model.js";
import { Company } from "../models/company.model.js";
import ApiError from "../utils/ApiError.js";

const createReview = async (data: any) => {
  const company = await Company.findById(data.company);

  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  const review = await Review.create(data);

  await updateCompanyRating(data.company);

  return review;
};

const getCompanyReviews = async (companyId: string) => {
  const company = await Company.findById(companyId);

  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  return await Review.find({ company: companyId }).sort({
    createdAt: -1,
  });
};

const updateCompanyRating = async (companyId: string) => {
  const reviews = await Review.find({ company: companyId });

  const reviewCount = reviews.length;

  const rating =
    reviewCount === 0
      ? 0
      : reviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount;

  await Company.findByIdAndUpdate(companyId, {
    rating: Number(rating.toFixed(1)),
    reviewCount,
  });
};

export { createReview, getCompanyReviews, updateCompanyRating };
