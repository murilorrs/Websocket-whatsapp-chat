import LoginPage from '@/pages/login';
import React, { useEffect, useRef, useState } from 'react';
import ChatListItem from './ChatListItem';

type User = {
  id: string;
  name: string;
};

export const ChatList: React.FC = () => {
  const [loading, setLoading] = useState(true);
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

  if (showLoginPage) {
    return (
      <LoginPage
        tempName={tempName}
        setTempName={setTempName}
        setName={setName}
        setShowLoginPage={setShowLoginPage}
      />
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-4">
      <div className="mt-8 h-[calc(100vh-4rem)]">
        <ul>
          {users.map((user) => (
            <ChatListItem
              key={user.id}
              name={user.name}
              lastMessage={''}
              lastMessageTime={'10:00 AM'}
              profilePicture={''}
              isLoading={false}
              isUnread={false}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
