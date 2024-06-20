import { Router } from 'express';
import {
  listJobs,
  addJob,
  removeJob,
  getJob,
} from '../controllers/job.controller';
import { validateJob } from '../validations';

const router = Router();

router.get('/', listJobs);
router.get('/:id', getJob);
router.post('/', validateJob, addJob);
router.delete('/:id', removeJob);

export default router;
