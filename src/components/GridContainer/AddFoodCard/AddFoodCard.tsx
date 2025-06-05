"use client";

import React from "react";

/**
 * @component AddFoodCard
 * @description An HTML component that will add a card when clicked.
 * @returns void
 */
const AddFoodCard = () => {
  return (
    <button
      className="transition duration-150 active:scale-95 md:hover:scale-110 bg-[#3B82F6] hover:bg-blue-600 py-2 px-4 rounded-4xl"
      // onClick={onButtonClick}
    >
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14m-7 7V5"
        />
      </svg>
    </button>
  );
};

export default AddFoodCard;
