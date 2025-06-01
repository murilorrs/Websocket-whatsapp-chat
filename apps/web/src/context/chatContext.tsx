import { createContext, useContext } from "react";
import { User } from "./chatProvider";

type ChatContextType = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  tempName: string;
  setTempName: React.Dispatch<React.SetStateAction<string>>;
  showLoginPage: boolean;
  setShowLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
  users: User[];
};

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined,
);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
