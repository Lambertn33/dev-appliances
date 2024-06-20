import { Router } from "express";
import {
  addCompany,
  listCompanies,
  removeCompany,
} from "../controllers/company.controller";
import { validateCompany } from "../validations";

const router = Router();

router.get("/", listCompanies);
router.post("/", validateCompany, addCompany);
router.delete("/:id", removeCompany);

export default router;
