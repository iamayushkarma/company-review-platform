import { Router } from "express";
import * as companyController from "../controllers/company.controller.js";

const router = Router();

router.post("/", companyController.createCompany);

router.get("/", companyController.getCompanies);

router.get("/:id", companyController.getCompanyById);

export default router;
