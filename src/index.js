import 'dotenv/config';

import express, { json } from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import ReadService from './services/readData.service.js';
import baseRouter from './routes/router.js';
import errorHandler from './middlewares/errorHandler.middleware.js';

const app = express();
app.use(cors());
const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = `${__dirname}/data/emails.json`;
const service = new ReadService(filePath);
const formatData = service.perform();

app.use(json());
app.set('formatData', formatData);

app.use('/api', baseRouter);

app.use(errorHandler);

export default app;
