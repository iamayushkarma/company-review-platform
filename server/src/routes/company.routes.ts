import { Router } from "express";
import * as companyController from "../controllers/company.controller";

const router = Router();

router.post("/", companyController.createCompany);

router.get("/", companyController.getCompanies);

router.get("/search", companyController.searchCompanies);

router.get("/:id", companyController.getCompanyById);

export default router;
