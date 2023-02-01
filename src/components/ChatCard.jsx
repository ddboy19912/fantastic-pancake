const ChatCard = ({ image, name, id, handleSelect }) => {
  return (
    <div
      onClick={() => handleSelect(id)}
      className="bg-white w-full hover:bg-gray-100 p-3 flex items-center gap-4 cursor-default border-b"
    >
      <img
        src={image}
        alt={name}
        className="w-10 h-10 object-cover rounded-full"
      />
      <div className="flex flex-col w-full flex-[2]">
        <h1 className="font-normal text-lg">{name}</h1>
      </div>
    </div>
  );
};

export default ChatCard;
