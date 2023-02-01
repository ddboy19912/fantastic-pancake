import React from 'react';
import { useChatContext } from '../context/ChatContext';
import bg from '../assets/Default WhatsApp background for people who lost it_ Requested by u_Marvin_der_kuhle_.jpeg';
import {
  PhoneIcon,
  VideoCameraIcon,
  MagnifyingGlassIcon,
  FaceSmileIcon,
  PaperClipIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/outline';

const ChatScreen = () => {
  const { currentChat } = useChatContext();

  return (
    <>
      {currentChat ? (
        <>
          {currentChat.map((chat) => {
            return (
              <div
                className="h-screen bg-slate-50 flex flex-col"
                key={chat.uid}
              >
                <div className="flex justify-between items-center px-6 mt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={chat.photoURL}
                      alt=""
                      className="w-14 h-14 object-cover rounded-full"
                    />
                    <h1 className="font-bold text-lg">{chat.displayName}</h1>
                  </div>
                  <div className="flex gap-7">
                    <span>
                      <VideoCameraIcon className="w-5 cursor-pointer" />
                    </span>
                    <span>
                      <PhoneIcon className="w-5 cursor-pointer" />
                    </span>
                    <span className="bg-gray-300 w-0.5" />
                    <span>
                      <MagnifyingGlassIcon className="w-5 cursor-pointer" />
                    </span>
                  </div>
                </div>
                <div className="overflow-auto h-full mt-4 bg-slate-500">
                  <img src={bg} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex bg-white px-4 justify-between items-center h-16 shadow-topShadow gap-4">
                  <div className="flex gap-5">
                    <span>
                      <FaceSmileIcon className="w-5 cursor-pointer" />
                    </span>
                    <span>
                      <PaperClipIcon className="w-5 cursor-pointer" />
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="w-full focus:border-none focus:outline-none h-full"
                  />
                  <div>
                    <MicrophoneIcon className="w-5 cursor-pointer" />
                  </div>
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
