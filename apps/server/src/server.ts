const express = require('express');
import http from 'http';
import messagesRoutes from './routes/messagesRoutes';
import { setupWebSocket } from './socket';
const app = express();
const socketServer = http.createServer(app);

const port = 3000;

app.use(messagesRoutes);

setupWebSocket(socketServer);

socketServer.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
