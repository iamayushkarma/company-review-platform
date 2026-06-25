import type { Review } from "../../types/review.types";
import { RatingStars } from "../common/RatingStars";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  const formattedDate = new Date(review.createdAt).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <article className="mx-5 py-6">
      <div className="flex items-start gap-5">
        {/* Avatar */}
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            review.fullName,
          )}&background=random`}
          alt={review.fullName}
          className="h-14 w-14 shrink-0 rounded-full object-cover"
        />

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-8">
            <div>
              <h3 className="text-[1.3rem] font-semibold text-text-primary">
                {review.fullName}
              </h3>

              <p className="mt-1 text-[14px] text-text-secondary">
                {formattedDate}
              </p>
            </div>

            <RatingStars rating={review.rating} />
          </div>

          {/* Review */}
          <p className="mt-5 text-[1rem] leading-8 text-text-secondary">
            {review.review}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
