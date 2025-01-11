


import React from 'react';
import profilePic from "../assets/sakshamkanojia.png";
import { PROFILE } from "../constants";
import { motion } from 'framer-motion';

// Bounce animation for the profile picture
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

// Swipe-up animation for the symbol
const swipeUpVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

const HeroSection = () => {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center px-6 sm:px-12 text-center">
      {/* Profile Picture */}
      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="mb-6"
      >
        <img
          src={profilePic}
          alt={PROFILE}
          className="w-32 sm:w-48 md:w-56 lg:w-64 rounded-full object-cover"
        />
      </motion.div>

      {/* Profile Information */}
      <div className="space-y-4">
        <h1 className="text-lg sm:text-2xl font-semibold uppercase">{PROFILE.name}</h1>
        <p className="text-base sm:text-lg font-medium text-gray-300">{PROFILE.info}</p>
      </div>

      {/* Swipe-up Symbol */}
      <motion.div
        variants={swipeUpVariants}
        initial="initial"
        animate="animate"
        className="flex justify-center mt-8"
      >
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15V3m0 0L8.25 6.75M12 3l3.75 3.75M4.5 18.75h15"
          />
           
        </svg>
        Swipe Up
      </motion.div>
    </div>
  );
};

export default HeroSection;
