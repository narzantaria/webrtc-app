import express, { type Express } from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import { createServer } from "http";
import { Server } from "socket.io";

const app: Express = express();
const httpServer = createServer(app);

export const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT: number = process.env.PORT != null ? Number(process.env.PORT) : 5000;
const HOST: string =
  process.env.HOST != null ? String(process.env.HOST) : "localhost";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

import './socket'

httpServer.listen(PORT, HOST, () => {
  console.log(`Server started at ${PORT}...`);
});