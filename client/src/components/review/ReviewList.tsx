import type { Review } from "../../types/review.types";
import ReviewCard from "./ReviewCard";

interface Props {
  reviews: Review[];
}

const ReviewList = ({ reviews }: Props) => {
  if (!reviews.length) {
    return (
      <div className="py-16 text-center text-text-secondary">
        No reviews yet.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
