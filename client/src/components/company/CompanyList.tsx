import type { Company } from "../../types/company.types";
import CompanyCard from "./CompanyCard";

interface CompanyListProps {
  companies: Company[];
}

const CompanyList = ({ companies }: CompanyListProps) => {
  if (companies.length === 0) {
    return (
      <div className="py-20 text-center text-text-secondary">
        No companies found.
      </div>
    );
  }

  return (
    <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {companies.map((company) => (
        <CompanyCard key={company._id} company={company} />
      ))}
    </section>
  );
};

export default CompanyList;
