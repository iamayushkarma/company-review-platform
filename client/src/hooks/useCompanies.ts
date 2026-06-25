import { useEffect, useState } from "react";
import { getCompanies } from "../api/company.api";
import type { Company } from "../types/company.types";

const useCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCompanies = async (search = "") => {
    try {
      const { data } = await getCompanies({
        search,
      });

      setCompanies(data.data);
    } catch (error) {
      console.error(error);
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
