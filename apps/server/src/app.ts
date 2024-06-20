import express from 'express';

import bodyParser from 'body-parser';

import cors from 'cors';

import { companyRoutes, jobRoutes, applianceRoutes } from './routes';

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/companies', companyRoutes);

app.use('/jobs', jobRoutes);

app.use('/appliances', applianceRoutes);

export default app;
