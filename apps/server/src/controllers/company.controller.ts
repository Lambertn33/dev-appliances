import { Request, Response } from "express";
import { CompanyRepository } from "../repositories/company.repository";
import { validationResult } from "express-validator";

import CompanyService from "../services/company.services";

const companyRepository = new CompanyRepository();
const companyService = new CompanyService();

export const listCompanies = async (_: Request, res: Response) => {
  const companies = await companyRepository.getAllCompanies();
  res.json(companies);
};

export const addCompany = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email } = req.body;
  const checkCompanyName = await companyService.checkCompany(name, email);

  if (checkCompanyName)
    return res.status(400).json({ message: "the company name already exists" });

  const company = await companyRepository.createCompany(name, email);
  res.status(201).json(company);
};

export const removeCompany = async (req: Request, res: Response) => {
  const { id } = req.params;
  await companyRepository.deleteCompany(Number(id));
  res.status(200).json({ message: "company deleted successfully" });
};
