import React from 'react';
import {
  PencilSquareIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { ChatScreen } from './';

const PageHOC = (Component, title, isChat) => () => {
  return (
    <div className="flex-1">
      <div className="flex flex-row h-full ">
        <div className="bg-white border-l border-gray-500 flex-[0.8]  flex flex-col gap-4 shadow-sideShadow">
          <div className="w-full px-6 mt-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">{title}</h1>
              {isChat && (
                <div className="flex gap-8">
                  <span>
                    <PencilSquareIcon className="w-6 cursor-pointer" />
                  </span>
                  <span>
                    <EllipsisHorizontalIcon className="w-6 cursor-pointer" />
                  </span>
                </div>
              )}
            </div>
          </div>
          <Component />
        </div>

        <div className="flex-[2]">
          {isChat ? <ChatScreen /> : <p>Nothing</p>}
        </div>
      </div>
    </div>
  );
};

export default PageHOC;
