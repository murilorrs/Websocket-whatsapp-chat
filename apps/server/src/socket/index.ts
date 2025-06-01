import { Server } from "http";
import { WebSocket, WebSocketServer } from "ws";

type User = {
  id: string;
  name: string;
  profilePicture: string;
};

const users = new Map<User, WebSocket>();

export function setupWebSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    ws.send("👋Connected");

    ws.on("message", async (message) => {
      const data = JSON.parse(message.toString());
      console.log("New connection:", data.name);
      console.log("Connections:", wss.clients.size);

      if (data.type === "join" && typeof data.name === "string") {
        const user = {
          id: crypto.randomUUID(),
          name: data.name,
          profilePicture: await getProfilePicture(),
        };
        users.set(user, ws);
        broadcastUsers();
      }

      // wss.clients.forEach((client) => {
      //   if (client.readyState === ws.OPEN) {
      //     client.send(message.toString());
      //   }
      // });
    });

    ws.on("close", () => {
      users.forEach((sock, user) => {
        if (sock === ws) users.delete(user);
      });
      console.log("Connections:", wss.clients.size);
      broadcastUsers();
    });
  });
}

// TODO: Quando desconectar no front dar reload na página

function broadcastUsers() {
  const names = Array.from(users.keys());
  const payload = JSON.stringify({ type: "user", users: names });

  users.forEach((user) => {
    user.send(payload);
  });
}

async function getProfilePicture() {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?mime_types=jpg,png",
  );

  const data = await response.json();
  const profilePictureUrl = data[0].url;
  return profilePictureUrl;
}
