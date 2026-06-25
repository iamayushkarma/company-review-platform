import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import type { Company } from "../../types/company.types";
import { RatingStars } from "../common/RatingStars";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  const formattedDate = new Date(company.foundedOn).toLocaleDateString("en-GB");

  return (
    <article className="rounded-2xl bg-white px-8 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between">
        {/* Left */}
        <div className="flex items-start gap-5">
          <img
            src={company.logo}
            alt={company.name}
            className="h-24 w-24 rounded-lg object-cover"
          />

          <div>
            <h2 className="text-[2rem] font-semibold leading-none text-[#1F1F1F]">
              {company.name}
            </h2>

            <div className="mt-3 flex items-center gap-2 text-[15px] text-[#7C7C7C]">
              <MapPin size={15} strokeWidth={2} />
              <span>{company.location}</span>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-3xl font-semibold text-[#1F1F1F]">
                {company.rating.toFixed(1)}
              </span>

              <RatingStars rating={company.rating} />

              <span className="text-2xl font-medium text-[#1F1F1F]">
                {company.reviewCount} Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex min-h-[96px] flex-col items-end justify-between">
          <p className="text-sm text-[#8A8A8A]">Founded on {formattedDate}</p>

          <Link
            to={`/company/${company._id}`}
            className="rounded-md bg-[#2F2F2F] px-8 py-3 text-base font-medium text-white transition hover:bg-black"
          >
            Detail Review
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CompanyCard;
