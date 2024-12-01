import express, { Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import signUpRoutes from './routes/signUpRoutes';
import loginRoutes from './routes/signUpRoutes';
import userRoute from './routes/userRoute';
import connectDB from './config/mongoose'; // Import your mongoose connection

dotenv.config();

const app: Application = express();

connectDB();

app.use(express.json());

// Routes
app.use('/', signUpRoutes);
app.use('/', loginRoutes);
app.use('/', userRoute);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app;