import { useEffect, useRef, useState } from 'react';

type User = {
  id: string;
  name: string;
};

export default function useChat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [to, setTo] = useState('');
  const [name, setName] = useState('');
  const [tempName, setTempName] = useState('');
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (name && socket.current === null) {
      const ws = new WebSocket('ws://localhost:3000');
      socket.current = ws;

      ws.onopen = () => {
        ws.send(JSON.stringify({ type: 'join', name }));
        console.log('🔌 conectado');
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'message') {
          setMessages((prev) => [...prev, `[${data.from}] ${data.text}`]);
          return;
        }

        if (data.type === 'user') {
          setUsers(
            data.users.map((user: User) => {
              return {
                id: user.id,
                name: user.name,
              };
            }),
          );
        }
      };

      ws.onclose = () => console.log('🔌 desconectado');
    }
  }, [name]);

  const send = () => {
    if (!socket.current || socket.current.readyState !== WebSocket.OPEN) return;
    const message = {
      type: 'message',
      to,
      text: input,
    };
    socket.current.send(JSON.stringify(message));
    setMessages((prev) => [...prev, `[eu ➡ ${to}] ${input}`]);
    setInput('');
  };
  return {
    setName,
    tempName,
    setTempName,
    showLoginPage,
    setShowLoginPage,
    users,
  };
}
