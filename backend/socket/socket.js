import {Server} from 'socket.io'
import http from 'http'
import express from 'express'

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['https://mern-chatapp-t6eo.onrender.com/'],
    methods: ["GET", "POST"]
  }
})

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
}

const userSocketMap = {}; //{userId: socketId}

io.on('connection', (socket) =>{
  console.log("a user is connected:", socket.id)

  const userId = socket.handshake.query.userId
  if (userId !== undefined) userSocketMap[userId] = socket.id

  // io.emit is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on is used to listen to events. can be used on both client and server side
  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id)
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  })
})

export  {app, io, server};