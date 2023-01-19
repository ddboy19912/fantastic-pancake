import React, { useMemo, useState } from 'react';
import { PageHOC, ChatCard } from '../components';
import { chatCardData } from '../data';

const Home = () => {
  const [name, setName] = useState('');

  const filteredChats = useMemo(() => {
    return chatCardData.filter((chat) => {
      return (
        name === '' || chat.name.toLowerCase().includes(name.toLowerCase())
      );
    });
  }, [name]);

  return (
    <div className="w-full">
      <div className="px-6">
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="border-b-gray-400 border-b-2 border-gray-200 border-2 w-full rounded-md p-1 focus:text-gray-700 focus:bg-white focus:border-b-green-600 focus:outline-none pl-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 mt-6 max-h-[50rem] overflow-auto px-6">
        {filteredChats.map((data) => (
          <ChatCard
            key={data.id}
            id={data.id}
            name={data.name}
            image={data.image}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
};

export default PageHOC(Home, 'Chats', true);
