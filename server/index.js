import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import loginRouter from './routes/login.js';
import signupRouter from './routes/signup.js';
import realTimeChatsRouter from './routes/realTimeChats.js';

dotenv.config();
connectDB(); // db connection
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);
app.use('/api/chats', realTimeChatsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


