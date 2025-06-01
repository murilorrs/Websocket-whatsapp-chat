import ChatListSearch from "@/pages/chat/components/chatList/ChatListSearch";

import ChatListFilter from "./components/chatList/ChatListFilter";
import MessagesPage from "./components/messages";
import ChatList from "./components/chatList";
import useChat from "./hooks/useChat";
import LoginPage from "../login";

export default function ChatPage() {
  const { setName, tempName, setTempName, showLoginPage, setShowLoginPage } =
    useChat();

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
    <div className="flex h-screen text-gray-100">
      <aside className="w-1/3 bg-customDarkGreen border-r border-customGrey flex flex-col">
        <header className="flex items-center p-3.5 bg-customLightGreen border-b border-none">
          <img
            src="hyerdev.png"
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
