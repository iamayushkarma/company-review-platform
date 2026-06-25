import { Review } from "../models/review.model";
import { Company } from "../models/company.model";
import ApiError from "../utils/ApiError";
import { updateCompanyRating } from "./company.service";

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
  return Review.find({ company: companyId }).sort({
    createdAt: -1,
  });
};

export { createReview, getCompanyReviews };
