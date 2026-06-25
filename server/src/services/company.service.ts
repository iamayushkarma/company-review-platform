import { Company } from "../models/company.model";

export const createCompany = async (data: any) => {
  return await Company.create(data);
};

export const getCompanies = async () => {
  return await Company.find().sort({ createdAt: -1 });
};

export const getCompanyById = async (id: string) => {
  return await Company.findById(id);
};

export const searchCompanies = async (search = "", sort = "createdAt") => {
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

export const updateCompanyRating = async (id: string) => {};
