import { useEffect, useState } from "react";

import HomeFilters from "../components/company/HomeFilters";
import CompanyList from "../components/company/CompanyList";
import AddCompanyModal from "../components/company/AddCompanyModal";

import useCompanies from "../hooks/useCompanies";

const Home = () => {
  const { companies, fetchCompanies } = useCompanies();

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchCompanies(search);
    }, 400);

    return () => clearTimeout(timeout);
  }, [search]);
  return (
    <>
      <HomeFilters
        search={search}
        setSearch={setSearch}
        onAddCompany={() => setIsOpen(true)}
      />

      <CompanyList companies={companies} />

      <AddCompanyModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={fetchCompanies}
      />
    </>
  );
};

export default Home;
