import React from 'react';
import { useChatContext } from '../context/ChatContext';

const ChatScreen = () => {
  const { currentChat } = useChatContext();

  return (
    <>
      {currentChat ? (
        <>
          {currentChat.map((chat) => {
            return (
              <div className="h-screen bg-slate-50 flex flex-col" key={chat.id}>
                <div className="flex justify-between items-center px-6 mt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={chat.image}
                      alt=""
                      className="w-14 h-14 object-cover rounded-full"
                    />
                    <h1 className="font-bold text-lg">{chat.name}</h1>
                  </div>
                  <div className="flex gap-3">
                    <span>camera</span>
                    <span>phone</span>
                    <span className="bg-gray-300 w-0.5" />
                    <span>search</span>
                  </div>
                </div>
                <div className="overflow-auto h-full mt-4">body</div>
                <div className="flex bg-white px-2 justify-between items-center h-16 shadow-topShadow gap-4">
                  <div className="flex gap-4">
                    <span>smiley</span>
                    <span>clip</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="w-full focus:border-none focus:outline-none h-full"
                  />
                  <div>voice</div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h2>No chat selected</h2>
      )}
    </>
  );
};

export default ChatScreen;
