import { Send, User, Bot } from "lucide-react";
import './App.css'


function App() {


  return (
    <div className="w-full min-h-screen bg-gray-100 ">
      <div className="max-w-3xl w-full mx-auto pt-5 px-5">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Real-Time Chat</h2>
        <p className="text-gray-600">
          A modern chat interface with auto-scroll and message bubbles
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
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
          <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50">
            {/* Message from other user */}
            <div className="flex items-end gap-2 mb-4 flex-row">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-400">
                <Bot size={16} className="text-white" />
              </div>
              <div className="flex flex-col items-start">
                <div className="max-w-xs md:max-w-md px-4 py-2 rounded-2xl bg-gray-200 text-gray-900 rounded-bl-sm">
                  <p className="text-sm">Hello! How can I help you today?</p>
                </div>
                <span className="text-xs text-gray-500 mt-1 px-2">10:30 AM</span>
              </div>
            </div>

            {/* Message from user */}
            <div className="flex items-end gap-2 mb-4 flex-row-reverse">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-600">
                <User size={16} className="text-white" />
              </div>
              <div className="flex flex-col items-end">
                <div className="max-w-xs md:max-w-md px-4 py-2 rounded-2xl bg-blue-600 text-white rounded-br-sm">
                  <p className="text-sm">I need help with my project</p>
                </div>
                <span className="text-xs text-gray-500 mt-1 px-2">10:31 AM</span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 px-6 py-4 bg-white rounded-b-lg">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 min-w-45 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Send size={18} />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
