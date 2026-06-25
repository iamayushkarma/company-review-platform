import { useEffect, useState } from "react";
import { getCompanies } from "../api/company.api";
import type { Company } from "../types/company.types";

const useCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCompanies = async (search = "") => {
    try {
      setLoading(true);

      const { data } = await getCompanies({
        search,
      });

      setCompanies(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return {
    companies,
    loading,
    fetchCompanies,
  };
};

export default useCompanies;
