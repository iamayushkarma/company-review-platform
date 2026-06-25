import { Star } from "lucide-react";
import type { Review } from "../../types/review.types";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <article className="rounded-xl border border-border bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{review.fullName}</h3>

          <p className="text-sm text-text-secondary">{review.subject}</p>
        </div>

        <div className="flex items-center gap-1">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />

          <span>{review.rating}</span>
        </div>
      </div>

      <p className="mt-4 leading-7 text-text-secondary">{review.review}</p>
    </article>
  );
};

export default ReviewCard;
