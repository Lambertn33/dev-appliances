import { Router } from "express";

import { applyForJob } from "../controllers/appliance.controller";

import { validateJobApplication } from "../validations";

const router = Router();

router.post("/", validateJobApplication, applyForJob);

export default router;
