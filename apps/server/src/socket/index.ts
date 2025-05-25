import { Server } from 'http';
const { WebSocketServer, WebSocket } = require('ws');

export function setupWebSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws: any) => {
    console.log('🔌 Nova conexão WebSocket');

    ws.on('message', (message: any) => {
      console.log('📩 Mensagem recebida:', message.toString());

      wss.clients.forEach((client: any) => {
        if (client.readyState === ws.OPEN) {
          client.send(message.toString());
        }
      });
    });

    ws.send('👋 Conectado ao servidor WebSocket!');
  });
}
