import { Request, Response } from "express";
import { ApplianceRepository } from "../repositories/appliance.repository";
import { validationResult } from "express-validator";
import nodemailer from "nodemailer";

import { receiveApplicationFromUser, sendApplicationToCompany } from "../mail";

const applianceRepository = new ApplianceRepository();

export const applyForJob = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { jobId, userName, userEmail, text } = req.body;

  try {
    const { appliance, job } = await applianceRepository.createAppliance(
      jobId,
      userName,
      userEmail,
      text
    );

    // Send email to the applicant
    let applicantInfo = await sendApplicationToCompany(
      userEmail,
      userName,
      jobId,
      job
    );

    // Send email to the company
    let companyInfo = await receiveApplicationFromUser(
      job,
      jobId,
      userEmail,
      userName,
      text
    );

    res.status(201).json({
      appliance,
      applicantMessageId: applicantInfo.messageId,
      applicantPreviewUrl: nodemailer.getTestMessageUrl(applicantInfo),
      companyMessageId: companyInfo.messageId,
      companyPreviewUrl: nodemailer.getTestMessageUrl(companyInfo),
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
