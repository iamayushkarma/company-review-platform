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

export const searchCompanies = async (search = "", sort = "name") => {
  const query: any = {};

  if (search) {
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

  return Company.find(query).sort({ [sort]: 1 });
};

export const updateCompanyRating = async (id: string) => {};
