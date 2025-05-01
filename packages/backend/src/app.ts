import express from 'express';
import apiRoutes from './routes/routes';
// import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Global error handler (should be after routes)
// app.use(errorHandler);

export default app;