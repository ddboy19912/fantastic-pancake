import { useEffect, useMemo, useState } from 'react';
import { PageHOC, ChatCard, Chats } from '../components';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useChatContext } from '../context/ChatContext';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [name, setName] = useState('');
  const [chatCardData, setChatCardData] = useState([]);
  const [open, setOpen] = useState(false);

  const { currentUser, setCurrentChat, currentChat } = useChatContext();

  // Function called on search
  const handleSearch = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach((doc) => {
        setChatCardData((user) => [...user, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Function called on Contact select
  const handleSelect = async (id) => {
    const newChat = unique.filter((c) => c.uid === id);
    setCurrentChat(newChat);
  };

  useEffect(() => {
    if (currentChat) {
      const fn = async () => {
        //check whether the group(chats in firestore) exists, if not create
        console.log(currentChat[0].uid);
        const combinedId =
          currentUser.uid > currentChat[0].uid
            ? currentUser.uid + currentChat[0].uid
            : currentChat[0].uid + currentUser.uid;
        try {
          const res = await getDoc(doc(db, 'chats', combinedId));

          if (!res.exists()) {
            //create a chat in chats collection
            await setDoc(doc(db, 'chats', combinedId), { messages: [] });

            //create user chats
            await updateDoc(doc(db, 'userChats', currentUser.uid), {
              [combinedId + '.userInfo']: {
                uid: currentChat[0].uid,
                displayName: currentChat[0].displayName,
                phoneNumber: currentChat[0].phoneNumber,
                photoURL: currentChat[0].photoURL,
              },
              [combinedId + '.date']: serverTimestamp(),
            });

            await updateDoc(doc(db, 'userChats', currentChat[0].uid), {
              [combinedId + '.userInfo']: {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
              },
              [combinedId + '.date']: serverTimestamp(),
            });
          }
        } catch (err) {}

        setName('');
      };

      fn();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChat]);

  useEffect(() => {
    handleSearch();
  }, []);

  const unique = useMemo(() => {
    return [...new Map(chatCardData.map((m) => [m.uid, m])).values()];
  }, [chatCardData]);

  const filteredChats = useMemo(() => {
    return unique.filter((chat) => {
      return (
        name === '' ||
        chat.displayName.toLowerCase().includes(name.toLowerCase())
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className="w-full h-full">
      <div className="px-6">
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="border-b-gray-400 border-b-2 border-gray-200 border-2 w-full rounded-md p-1 focus:text-gray-700 focus:bg-white focus:border-b-green-600 focus:outline-none pl-3"
          value={name}
          onClick={() => setOpen(true)}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="relative">
        {open && (
          <div className="flex flex-col overflow-auto absolute bg-white rounded-b-lg border-2 border-t-0 shadow-lg top-0 w-[84%] left-2/4 -translate-x-1/2">
            <div className="flex flex-row-reverse p-1">
              <XMarkIcon
                className="w-4 text-gray-400 cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            {filteredChats.map((data) => (
              <ChatCard
                key={data.uid}
                id={data.uid}
                name={data.displayName}
                image={data.photoURL}
                handleSelect={handleSelect}
              />
            ))}
          </div>
        )}

        <Chats />
      </div>
    </div>
  );
};

export default PageHOC(Home, 'Chats', true);
