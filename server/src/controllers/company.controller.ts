import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";

import * as companyService from "../services/company.service";

export const createCompany = asyncHandler(async (req, res) => {
  const company = await companyService.createCompany(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, company, "Company created successfully"));
});

export const getCompanies = asyncHandler(async (req, res) => {
  const { search, city, sort } = req.query;

  const companies = await companyService.getCompanies(
    search as string,
    city as string,
    sort as string,
  );

  return res.json(new ApiResponse(200, companies));
});

export const getCompanyById = asyncHandler(async (req, res) => {
  const company = await companyService.getCompanyById(req.params.id as string);

  return res.json(new ApiResponse(200, company));
});

export const searchCompanies = asyncHandler(async (req, res) => {
  const { search, sort } = req.query;

  const companies = await companyService.searchCompanies(
    search as string,
    sort as string,
  );

  return res.json(new ApiResponse(200, companies));
});
