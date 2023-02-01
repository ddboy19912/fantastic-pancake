/* eslint-disable no-unused-vars */
import { chatCardData } from '../data';
import { useChatContext } from '../context/ChatContext';

const Card = ({ image, text, name, id }) => {
  //   const { setCurrentChat } = useChatContext();

  return (
    <div className="w-full h-24 hover:bg-gray-100 p-3 rounded-lg flex items-center gap-4 cursor-default">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 object-cover rounded-full"
      />
      <div className="flex flex-col w-full flex-[2]">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default Card;
