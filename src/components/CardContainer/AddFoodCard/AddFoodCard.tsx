"use client";

import React from "react";

interface AddFoodCardProps {
  onButtonClick: () => void;
}

/**
 * @component AddFoodCard
 * @description An HTML component that will add a card when clicked.
 * @returns void
 */
const AddFoodCard = ({ onButtonClick }: AddFoodCardProps) => {
  return (
    <button
      className="bg-[#3B82F6] text-[#F8EDFF] rounded-4xl pb-2 pt-2 px-4 shadow-2xl hover:cursor-pointer transition-colors duration-300"
      onClick={onButtonClick}
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
