import { createContext, useState, useContext } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState(null);
  const [currentTab, setCurrentTab] = useState('chat');

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
