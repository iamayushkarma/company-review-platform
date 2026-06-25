import type { Review } from "../../types/review.types";
import ReviewCard from "./ReviewCard";

interface Props {
  reviews: Review[];
  onRefresh: () => void;
}

const ReviewList = ({ reviews, onRefresh }: Props) => {
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
        <ReviewCard key={review._id} review={review} onRefresh={onRefresh} />
      ))}
    </div>
  );
};

export default ReviewList;
