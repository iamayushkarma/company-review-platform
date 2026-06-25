import { useParams } from "react-router-dom";

import CompanyHeader from "../components/company/CompanyHeader";
import useCompany from "../hooks/useCompany";

const CompanyDetails = () => {
  const { companyId } = useParams();

  const { company } = useCompany(companyId!);

  if (!company) {
    return <div className="py-20 text-center">Company not found.</div>;
  }

  return (
    <div className="space-y-8">
      <CompanyHeader company={company} />

      {/* Reviews */}
    </div>
  );
};

export default CompanyDetails;
