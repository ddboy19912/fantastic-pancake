import { chatCardData } from '../data';
import { useChatContext } from '../context/ChatContext';

const CallCard = ({ image, name, id, data }) => {
  const { setCurrentChat } = useChatContext();

  function singleChat(id) {
    const newChat = chatCardData.filter((c) => c.id === id);
    setCurrentChat(newChat);
  }

  return (
    <>
      {data.calls.length > 0 && (
        <div
          onClick={() => singleChat(id)}
          className="w-full h-24 hover:bg-gray-100 p-3 rounded-lg flex items-center gap-4 cursor-default"
        >
          <img
            src={image}
            alt={name}
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="flex flex-col w-full flex-[2]">
            <h1 className="font-bold text-lg">{name}</h1>
            {data.calls.map((call) => {
              return (
                <p
                  className={`${
                    call.status === 'Missed' ? 'text-red-400' : 'text-gray-400'
                  }`}
                >
                  {call.status}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CallCard;
