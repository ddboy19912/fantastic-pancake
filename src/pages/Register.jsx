import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const { navigate } = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const phoneNumber = e.target[3].value;
    const profilePic = e.target[4].files[0];

    console.log(displayName);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(
        storage,
        `profileImages/${res.user.uid}/${displayName}`
      );

      console.log(res.user);

      const uploadTask = uploadBytesResumable(storageRef, profilePic);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              phoneNumber,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'userChats', res.user.uid), {});
            navigate('/');
          });
        }
      );
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  }

  return (
    <div className="bg-green-300 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg px-16 py-5 flex flex-col gap-8 shadow-xl">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl text-green-600">ChatsApp</h1>
          <h1>Create an Account</h1>
        </div>
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
          <input
            className="border-b-gray-400 border-b-2 border-gray-200 border-2 w-full rounded-md p-1 focus:text-gray-700 focus:bg-white focus:border-b-green-600 focus:outline-none pl-3"
            type="text"
            placeholder="Display Name"
            name=""
            id=""
          />
          <input
            className="border-b-gray-400 border-b-2 border-gray-200 border-2 w-full rounded-md p-1 focus:text-gray-700 focus:bg-white focus:border-b-green-600 focus:outline-none pl-3"
            type="email"
            placeholder="Your Email"
            name=""
            id=""
          />
          <input
            type="password"
            placeholder="Type in a secure password"
            name=""
            className="border-b-gray-400 border-b-2 border-gray-200 border-2 w-full rounded-md p-1 focus:text-gray-700 focus:bg-white focus:border-b-green-600 focus:outline-none pl-3"
            id=""
          />
          <PhoneInput country={'us'} />
          <input type="file" name="" id="img" className="hidden" />
          <label
            htmlFor="img"
            className="flex items-center gap-4 cursor-pointer w-max"
          >
            <PhotoIcon className="w-10" fill="rgb(22 163 74)" />
            <p className="font-semibold text-slate-500">
              Upload Profile Picture
            </p>
          </label>
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create Account
          </button>
        </form>
        <p>
          You have an account ?{' '}
          <Link to="/login" className="text-green-400">
            Login
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Register;
