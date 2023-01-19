import React from 'react';
import {
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useChatContext } from '../context/ChatContext';

const Sidebar = () => {
  const { currentTab, setCurrentTab } = useChatContext();

  return (
    <aside className="flex flex-col items-center py-4 pr-1.5 gap-2">
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
          } w-full p-3 flex flex-col items-center justify-center rounded-lg cursor-pointer`}
        >
          <ArrowPathIcon className="w-5" />
        </span>
      </Link>
    </aside>
  );
};

export default Sidebar;
