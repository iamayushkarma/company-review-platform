import CompanyList from "../components/company/CompanyList";
import HomeFilters from "../components/company/HomeFilters";
import useCompanies from "../hooks/useCompanies";

const Home = () => {
  const { companies, loading } = useCompanies();

  return (
    <>
      <HomeFilters />

      {loading ? (
        <h2 className="mt-10 text-center text-lg">Loading...</h2>
      ) : (
        <CompanyList companies={companies} />
      )}
    </>
  );
};

export default Home;
