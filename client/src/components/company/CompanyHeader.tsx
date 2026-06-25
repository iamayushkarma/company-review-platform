import { CalendarDays, MapPin, Star } from "lucide-react";
import type { Company } from "../../types/company.types";

interface CompanyHeaderProps {
  company: Company;
}

const CompanyHeader = ({ company }: CompanyHeaderProps) => {
  return (
    <section className="rounded-xl border border-border bg-white p-8">
      <div className="flex items-start gap-6">
        <img
          src={company.logo}
          alt={company.name}
          className="h-24 w-24 rounded-xl border border-border object-contain p-3"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-semibold">{company.name}</h1>

          <div className="mt-3 flex items-center gap-2 text-text-secondary">
            <MapPin size={18} />
            {company.location}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />

            <span className="font-semibold">{company.rating.toFixed(1)}</span>

            <span className="text-text-secondary">
              ({company.reviewCount} Reviews)
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2 text-text-secondary">
            <CalendarDays size={18} />
            Founded {new Date(company.foundedOn).toLocaleDateString()}
          </div>
        </div>
      </div>

      <p className="mt-6 leading-7 text-text-secondary">
        {company.description}
      </p>
    </section>
  );
};

export default CompanyHeader;
