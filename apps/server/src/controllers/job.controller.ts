import { Request, Response } from 'express';
import { JobRepository } from '../repositories/job.repository';

import { validationResult } from 'express-validator';

const jobRepository = new JobRepository();

export const listJobs = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;

  const jobs = await jobRepository.getAlldJobs(page, pageSize);
  res.json(jobs);
};

export const addJob = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, companyId } = req.body;
  const job = await jobRepository.createJob(name, description, companyId);
  res.status(201).json(job);
};

export const getJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const job = await jobRepository.getJob(Number(id));
  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }
  res.status(200).json(job);
};

export const removeJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  await jobRepository.deleteJob(Number(id));
  res.status(200).json({ message: 'job deleted successfully' });
};
