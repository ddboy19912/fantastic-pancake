import React, { useState } from 'react';
import {
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowPathIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useChatContext } from '../context/ChatContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Modal from './Modal';

const Sidebar = () => {
  const { currentTab, setCurrentTab, currentUser } = useChatContext();

  const [modal, setModal] = useState(false);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <aside className="flex flex-col items-center py-4 pr-1.5 gap-72">
      <div className="flex flex-col items-center py-4 pr-1.5 gap-2">
        <Link to="/" onClick={() => setCurrentTab('chat')}>
          <span
            className={`hover:bg-gray-100 ${
              currentTab === 'chat' ? 'bg-gray-100' : 'bg-none'
            } w-full p-3 flex flex-col items-center justify-center rounded-lg cursor-pointer`}
          >
            <ChatBubbleOvalLeftEllipsisIcon className="w-5" />
          </span>
        </Link>

        <Link to="/calls" onClick={() => setCurrentTab('calls')}>
          <span
            className={`hover:bg-gray-100 ${
              currentTab === 'calls' ? 'bg-gray-100' : 'bg-none'
            } w-full p-3 flex flex-col items-center justify-center rounded-lg cursor-pointer`}
          >
            <PhoneIcon className="w-5" />
          </span>
        </Link>

        <Link to="/status" onClick={() => setCurrentTab('status')}>
          <span
            className={`hover:bg-gray-100 ${
              currentTab === 'status' ? 'bg-gray-100' : 'bg-none'
            } w-full p-3 flex  items-center justify-center rounded-lg cursor-pointer`}
          >
            <ArrowPathIcon className="w-5" />
          </span>
        </Link>
      </div>
      <div>
        <div className="flex">
          <span
            onClick={() => setModal(!modal)}
            className={`hover:bg-gray-100 ${
              currentTab === 'settings' ? 'bg-gray-100' : 'bg-none'
            } w-full p-3 flex items-center justify-center rounded-lg cursor-pointer`}
          >
            <Cog6ToothIcon className="w-5" />
          </span>
          {modal && (
            <Modal
              height="25rem"
              width="35rem"
              color="white"
              signOut={handleSignOut}
            />
          )}
        </div>

        <span className="">
          <img
            src={currentUser.photoURL}
            alt=""
            className="w-12 rounded-full"
          />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
