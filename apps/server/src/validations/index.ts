import { body } from "express-validator";

export const validateJobApplication = [
  body("userName").notEmpty().withMessage("Please enter your name"),
  body("userEmail")
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid email"),
  body("text")
    .notEmpty()
    .withMessage("Tell us why you are interested in this job"),
  body("jobId")
    .notEmpty()
    .withMessage("Job ID is required")
    .isInt()
    .withMessage("Job ID must be a number"),
];

export const validateCompany = [
  body("name").notEmpty().withMessage("Job name is required"),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("email is required and must be an email"),
];

export const validateJob = [
  body("name").notEmpty().withMessage("Job name is required"),
  body("description").notEmpty().withMessage("Job description is required"),
  body("companyId")
    .notEmpty()
    .withMessage("Company ID is required")
    .isInt()
    .withMessage("Company ID must be a number"),
];
