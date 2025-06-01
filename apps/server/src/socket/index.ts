import { Server } from 'http';
import { WebSocket, WebSocketServer } from 'ws';

const users = new Map<string, WebSocket>();

export function setupWebSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws: WebSocket) => {
    console.log('new websocket connection:');
    ws.send('👋Connected');

    ws.on('message', (message: any) => {
      let userName;
      const data = JSON.parse(message.toString());
      console.log('data', data);

      if (data.type === 'join' && typeof data.name === 'string') {
        userName = data.name;
        users.set(userName, ws);
      }

      broadcastUsers();

      wss.clients.forEach((client: any) => {
        if (client.readyState === ws.OPEN) {
          client.send(message.toString());
        }
      });
    });

    ws.on('close', () => {
      users.forEach((sock, name) => {
        if (sock === ws) users.delete(name);
      });
      broadcastUsers();
    });
  });
}

function broadcastUsers() {
  const names = Array.from(users.keys());
  const payload = JSON.stringify({ type: 'user', users: names });

  users.forEach((user) => {
    user.send(payload);
  });
}
