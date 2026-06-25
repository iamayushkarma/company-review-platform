import { CalendarDays, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Company } from "../../types/company.types";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <article className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={company.logo}
            alt={company.name}
            className="h-16 w-16 rounded-lg border border-border object-contain p-2"
          />

          <div>
            <h2 className="text-xl font-semibold text-text-primary">
              {company.name}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-sm text-text-secondary">
              <MapPin size={16} />
              {company.location}
            </div>

            <div className="mt-2 flex items-center gap-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />

              <span className="font-medium">{company.rating.toFixed(1)}</span>

              <span className="text-text-secondary">
                ({company.reviewCount} Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 line-clamp-3 text-sm leading-6 text-text-secondary">
        {company.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <CalendarDays size={16} />
          Founded {new Date(company.foundedOn).toLocaleDateString()}
        </div>

        <Link
          to={`/company/${company._id}`}
          className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
        >
          Detail Review
        </Link>
      </div>
    </article>
  );
};

export default CompanyCard;
