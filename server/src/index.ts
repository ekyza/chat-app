import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import "dotenv/config";

import authRoute from "./routes/authRoute";
import searchRoute from "./routes/searchRoute";
import friendRoute from "./routes/friendRoute";

const PORT = process.env.EXPRESS_PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());

app.use("/api", authRoute);
app.use("/api", searchRoute);
app.use("/api", friendRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
