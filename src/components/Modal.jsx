import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ height, width, color, signOut }) => {
  const dropIn = {
    hidden: {
      x: 0,
      y: 0,
      scale: 0,
      //   opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      //   opacity: 1,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeOut',
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-2">
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            height: `${height}`,
            width: `${width}`,
            background: `${color}`,
            originX: 0,
            originY: 1,
          }}
          className="shadow-xl rounded-xl flex flex-col-reverse px-28 "
        >
          <button
            onClick={signOut}
            className="focus:outline-none text-white bg-red-700 hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sign Out
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
