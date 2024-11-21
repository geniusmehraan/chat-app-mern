import { Server } from "socket.io";
import http from "http"

import express from "express"

const app = express();

const server = http.createServer(app)

const SocketServer = new Server(server,
    {
        cors:{
            origin:["https://shakir-chat-app-mpc7.onrender.com"],
            methods:["GET","POST"]
        }
    }
)

const userSocketMap = {}; //{userId:socketId}


export const getrecivedSocketId = (recivedID)=>{
return userSocketMap[recivedID];
}



SocketServer.on("connection", (socket)=>{
    console.log("a user connected",socket.id)
  

    const userId = socket.handshake.query.userId;

    if(userId!=="undefined") userSocketMap[userId] = socket.id;
        
// emit is used to send events to all connected clients

    SocketServer.emit("getOnlineUsers",Object.keys(userSocketMap))

    socket.on("disconnect",()=>{
        console.log("a use r disconnected",socket.id)
        delete userSocketMap[userId]
        SocketServer.emit("getOnlineUsers",Object.keys(userSocketMap))

    })
})


export {app,SocketServer,server}



