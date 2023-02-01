import { useEffect, useState } from 'react';
import { useChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
// import { Card } from './';

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useChatContext();

  console.log(currentUser.uid);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  //   const sthg = Object.entries(chats);

  //   {
  //     chats && console.log(Object.entries(chats)[0].map((c) => c));
  //   }

  return (
    <div className="h-screen">
      {/* {chats &&
        Object.entries(chats)?.map((chat) => <p>{chat[1].displayName}</p>)} */}
      abc
    </div>
  );
};

export default Chats;
