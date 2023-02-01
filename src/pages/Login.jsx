import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="bg-green-300 h-screen flex items-center justify-center w-full">
      <div className="bg-white rounded-lg px-16 py-5 flex flex-col gap-8 shadow-xl">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl text-green-600">ChatsApp</h1>
          <h1>Sign in to your Account</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
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
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Log In
          </button>
        </form>
        {err && <span>Something went wrong</span>}
        <p>
          You don't have an account ?{' '}
          <Link to="/register" className="text-green-400">
            Register
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Login;
