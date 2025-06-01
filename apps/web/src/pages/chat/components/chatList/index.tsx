import ChatListItem from "./ChatListItem";
import useChat from "../../hooks/useChat";

export default function ChatList() {
  const { users } = useChat();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-4">
      <div className="mt-8 h-[calc(100vh-4rem)]">
        <ul>
          {users.map((user) => (
            <ChatListItem
              key={user.id}
              name={user.name}
              lastMessage={""}
              lastMessageTime={"10:00 AM"}
              profilePicture={user.profilePicture}
              isLoading={false}
              isUnread={false}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
