import React from 'react';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-green-300 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg px-16 py-5 flex flex-col gap-8 shadow-xl">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl text-green-600">ChatsApp</h1>
          <h1>Sign in to your Account</h1>
        </div>
        <form className="flex flex-col gap-8">
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
        </form>
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
