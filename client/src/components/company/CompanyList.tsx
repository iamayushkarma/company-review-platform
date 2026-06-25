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
    <div className="space-y-6">
      {companies.map((company) => (
        <CompanyCard key={company._id} company={company} />
      ))}
    </div>
  );
};

export default CompanyList;
