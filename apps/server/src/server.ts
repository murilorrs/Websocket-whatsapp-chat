import express from "express";
import http from "http";
import { setupWebSocket } from "./socket";
import Routes from "./routes";
const app = express();
const socketServer = http.createServer(app);

const port = 3000;

app.use(Routes);

setupWebSocket(socketServer);

socketServer.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
