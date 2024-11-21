import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { log } from "console";
import authroutes from "./routes/auth.route.js";
import messageroute from "./routes/message.route.js";
import userToGet from "./routes/user.route.js";
import connectToMongoDB from "./db/ConnectToMongo.js";
import path from "path";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authroutes);

app.use("/api/messages", messageroute);
app.use("/api", userToGet);



const __dirname = path.resolve()


app.use(express.static(path.join(__dirname, 'frontend', 'dist')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});



server.listen(PORT, () => {
  log(`server started at port : ${PORT}`);

  connectToMongoDB();
});
