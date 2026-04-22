import { Send, User, Bot } from "lucide-react";
import "./App.css";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
  time: Date;
}


function MessagePopus({
  text,
  sender,
  time,
}: {
  text: string;
  sender: "user" | "other";
  time: Date;
}) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`flex items-end gap-2 mb-4 ${sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${sender === "user" ? "bg-blue-600" : "bg-gray-400"}`}>
        {sender === "user" ? (
          <User size={16} className="text-white" />
        ) : (
          <Bot size={16} className="text-white" />
        )}
      </div>
      <div className="flex flex-col items-start">
        <div
          className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl  ${sender === "user" ? "bg-blue-600 text-white rounded-br-sm" : "bg-gray-200 text-gray-900 rounded-bl-sm"}`}>
          <p className="text-sm">{text}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1 px-2">
          {formatTime(time)}
        </span>
      </div>
    </div>
  );
}

function ChatUI() {
  const [message, setMessage] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const autoScroll = useRef<HTMLDivElement>(null);

  function sendMsg(text: string, sender: "user" | "other") {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      time: new Date(),
    };
    setMessage((prev) => [...prev, newMessage]);
  }

  const scrolToBottom = () => {
    autoScroll.current?.scrollIntoView({ behavior: "smooth" });
  };



  useEffect(() => {
    scrolToBottom();
  }, [message]);

  function handleSend() {
    if (inputValue.trim()) {
      sendMsg(inputValue, "user");
      setInputValue("");

      setTimeout(() => {
        const response = [
          "1️⃣  Random Response #1 from saved responses 🟢",
          "2️⃣  Random Response #2 from saved responses 🔵",
          "3️⃣  Random Response #3 from saved responses 🟣",
          "4️⃣  Random Response #4 from saved responses 🟡",
          "5️⃣  Random Response #5 from saved responses 🟠",
          "6️⃣  Random Response #6 from saved responses 🔴",
          "7️⃣  Random Response #7 from saved responses ⚫",
          "8️⃣  Random Response #8 from saved responses ⚪",
          "9️⃣  Random Response #9 from saved responses 🟤",
          "🔟  Random Response #10 from saved responses ✨",
        ];
        const randomResponse =
          response[Math.floor(Math.random() * response.length)];
        sendMsg(randomResponse, "other");
      }, 1000);
      console.log(message);
    }
  }

  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-3xl   mx-auto pt-5 px-5">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-700 mb-2">
              Real-Time Chat UI
            </h2>
            <p className="text-gray-600">
              A modern chat interface with auto-scroll and message bubbles
            </p>
          </div>

          <div className="max-w-3xl mx-auto h-120">
            <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Chat Assistant</h3>
                    <p className="text-xs text-blue-100">Online</p>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto  px-6 py-4 bg-gray-50">
                {message.length < 1 ? (
                  <div className="text-center pt-25 text-xl font-semibold text-gray-400">
                    No message has been sent by the user yet.
                  </div>
                ) : (
                  <>
                    {message.map((m) => (
                      <MessagePopus
                        key={m.id}
                        text={m.text}
                        sender={m.sender}
                        time={m.time}
                      />
                    ))}
                  </>
                )}
                <div ref={autoScroll} />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 px-6 py-4 bg-white rounded-b-lg">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type a message..."
                    className="flex-1 min-w-45 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSend}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <Send size={18} />
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatUI;
