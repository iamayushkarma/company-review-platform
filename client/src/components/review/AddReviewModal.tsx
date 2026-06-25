import { useForm } from "react-hook-form";
import { X } from "lucide-react";

import { createReview } from "../../api/review.api";

interface Props {
  open: boolean;
  companyId: string;
  onClose: () => void;
  onSuccess: () => void;
}

interface ReviewForm {
  fullName: string;
  subject: string;
  review: string;
  rating: number;
}

const AddReviewModal = ({ open, companyId, onClose, onSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ReviewForm>();

  if (!open) return null;

  const onSubmit = async (data: ReviewForm) => {
    try {
      await createReview({
        ...data,
        company: companyId,
        rating: Number(data.rating),
      });

      reset();

      onClose();

      onSuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
      <div className="w-full max-w-lg rounded-xl bg-white">
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-semibold">Add Review</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6">
          <input
            {...register("fullName", { required: true })}
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
          />

          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            rows={5}
            {...register("review", { required: true })}
            placeholder="Write your review..."
            className="w-full rounded-lg border p-3"
          />

          <input
            type="number"
            min={1}
            max={5}
            {...register("rating", { required: true })}
            placeholder="Rating (1-5)"
            className="w-full rounded-lg border p-3"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-2"
            >
              Cancel
            </button>

            <button
              disabled={isSubmitting}
              className="rounded-lg bg-violet-600 px-5 py-2 text-white"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;
