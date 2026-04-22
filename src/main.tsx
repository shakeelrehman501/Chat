import { createRoot } from 'react-dom/client'
import './index.css'
import ChatUI from './App.tsx'
import { ContextProvider } from './context/ChatContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <ChatUI />
  </ContextProvider>
   

)
