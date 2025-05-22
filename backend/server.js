import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';

import connectToMongDB from './db/connectToMongoDB.js';

import {app, server} from './socket/socket.js';

dotenv.config();
const PORT = process.env.PORT || 7000;

app.use(express.json());  // to parse json payload (from req.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)


app.get('/', (req, res) => {
  res.send("Hello");
});


server.listen(PORT, () => {
  console.log("Server started at port:", PORT);
  connectToMongDB();
});