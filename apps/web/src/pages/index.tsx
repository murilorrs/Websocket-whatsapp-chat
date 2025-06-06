import ChatListSearch from "@/pages/chat/components/chatList/ChatListSearch";
import { useChat } from "@/context/chatContext";

import ChatListFilter from "./chat/components/chatList/ChatListFilter";
import MessagesPage from "./chat/components/messages";
import ChatList from "./chat/components/chatList";
import LoginPage from "./login";

export default function ChatPage() {
  const { users, showLoginPage } = useChat();
  if (showLoginPage) return <LoginPage />;
  return (
    <div className="flex h-screen text-gray-100">
      <aside className="w-1/3 bg-customDarkGreen border-r border-customGrey flex flex-col">
        <header className="flex items-center p-3.5 bg-customLightGreen border-b border-none">
          <img
            src={users[0]?.profilePicture}
            alt="HyerDev"
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <h2 className="text-lg font-semibold">Conversas</h2>
        </header>
        <div className="flex items-center p-4">
          <ChatListSearch />
          <div className="ml-3">
            <ChatListFilter />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ChatList />
        </div>
      </aside>

      <MessagesPage />
    </div>
  );
}
