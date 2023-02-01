import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  );
  const [currentTab, setCurrentTab] = useState('chat');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <ChatContext.Provider
      value={{
        currentChat,
        setCurrentChat,
        currentTab,
        setCurrentTab,
        currentUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);
