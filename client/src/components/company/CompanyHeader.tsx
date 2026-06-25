import { MapPin } from "lucide-react";
import type { Company } from "../../types/company.types";

interface CompanyHeaderProps {
  company: Company;
  reviewCount: number;
  onAddReview: () => void;
}

const CompanyHeader = ({
  company,
  reviewCount,
  onAddReview,
}: CompanyHeaderProps) => {
  const filledStars = Math.round(company.rating);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-[0_8px_35px_rgba(0,0,0,0.06)]">
      <div className="flex items-start justify-between">
        {/* Left Side */}
        <div className="flex gap-5">
          <img
            src={company.logo}
            alt={company.name}
            className="h-24 w-24 rounded-lg object-cover"
          />

          <div>
            <h1 className="text-[2rem] font-semibold text-[#1B1B1B]">
              {company.name}
            </h1>

            <div className="mt-2 flex items-center gap-2 text-sm text-[#7A7A7A]">
              <MapPin size={15} />
              <span>{company.location}</span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-3xl font-semibold">
                {company.rating.toFixed(1)}
              </span>

              <div className="text-2xl tracking-[3px] text-[#F4B400]">
                {"★".repeat(filledStars)}
                {"☆".repeat(5 - filledStars)}
              </div>

              <span className="text-xl font-medium text-[#222]">
                {reviewCount} Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex h-full flex-col items-end justify-between">
          <p className="text-sm text-[#8B8B8B]">
            Founded on {new Date(company.foundedOn).toLocaleDateString("en-GB")}
          </p>

          <button
            onClick={onAddReview}
            className="mt-16 rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-700 px-7 py-3 font-medium text-white transition hover:opacity-90"
          >
            + Add Review
          </button>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />
    </section>
  );
};
export default CompanyHeader;
