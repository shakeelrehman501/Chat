import { createContext, useContext, useState, type ReactNode } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
  time: Date;
}

interface ChatContextType {
  message: Message[];
  sendMsg: (text: string, sender: "user" | "other") => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<Message[]>([]);

  function sendMsg(text: string, sender: "user" | "other") {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      time: new Date(),
    };
    setMessage((prev) => [...prev, newMessage]);
  }

  return (
    <ChatContext.Provider value={{ message, sendMsg }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat within Provider");
  }
  return context;
}
