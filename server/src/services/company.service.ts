import { Company } from "../models/company.model";

const createCompany = async (data: any) => {
  return await Company.create(data);
};

const getCompanies = async (search = "", city = "", sort = "createdAt") => {
  return await searchCompanies(search, city, sort);
};

const getCompanyById = async (id: string) => {
  return await Company.findById(id);
};

const searchCompanies = async (search = "", city = "", sort = "createdAt") => {
  const query: any = {};

  if (search.trim()) {
    query.$or = [
      {
        name: {
          $regex: search,
          $options: "i",
        },
      },
      {
        city: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  if (city.trim()) {
    query.city = {
      $regex: city,
      $options: "i",
    };
  }

  let sortQuery: any = {};

  switch (sort) {
    case "rating":
      sortQuery = { rating: -1 };
      break;

    case "name":
      sortQuery = { name: 1 };
      break;

    case "createdAt":
    default:
      sortQuery = { createdAt: -1 };
      break;
  }

  return await Company.find(query).sort(sortQuery);
};

const updateCompanyRating = async (id: string) => {};

export {
  createCompany,
  getCompanies,
  getCompanyById,
  searchCompanies,
  updateCompanyRating,
};
