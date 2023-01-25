import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const [currentTab, setCurrentTab] = useState('chat');

  useEffect(() => {}, []);

  return (
    <ChatContext.Provider
      value={{
        currentChat,
        setCurrentChat,
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);
