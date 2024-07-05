import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan';
import logger from './logger.js';

const app = express();
app.use(bodyParser.json());

app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) }}));
app.use(bodyParser.json())
app.use('/users', userRoutes);

export default app;