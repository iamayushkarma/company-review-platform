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

export const searchCompanies = async (
  search = "",
  city = "",
  sort = "name",
) => {
  const query: any = {};

  if (search) {
    query.name = {
      $regex: search,
      $options: "i",
    };
  }

  if (city) {
    query.city = city;
  }

  return await Company.find(query).sort({ [sort]: 1 });
};

export const updateCompanyRating = async (id: string) => {};
