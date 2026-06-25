import { useState } from "react";
import { useParams } from "react-router-dom";

import CompanyHeader from "../components/company/CompanyHeader";
import ReviewList from "../components/review/ReviewList";
import AddReviewModal from "../components/review/AddReviewModal";

import useCompany from "../hooks/useCompany";
import useReviews from "../hooks/useReviews";

const CompanyDetails = () => {
  const { companyId } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const { company, fetchCompany } = useCompany(companyId!);
  const { reviews, fetchReviews } = useReviews(companyId!);

  if (!company) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Company not found</h2>
      </div>
    );
  }

  return (
    <>
      <CompanyHeader
        company={company}
        reviewCount={reviews.length}
        onAddReview={() => setIsOpen(true)}
      />

      <div className="mt-8">
        <p className="mb-6 text-sm text-[#8C8C8C]">
          Result Found: {reviews.length}
        </p>

        <ReviewList reviews={reviews} />
      </div>

      <AddReviewModal
        open={isOpen}
        companyId={companyId!}
        onClose={() => setIsOpen(false)}
        onSuccess={() => {
          fetchReviews();
          fetchCompany();
        }}
      />
    </>
  );
};

export default CompanyDetails;
