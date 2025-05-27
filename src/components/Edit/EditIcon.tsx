import React, { useState, useEffect, useRef } from "react";
import EditMenu from "./EditMenu";

/**
 * @component EditIcon
 * @description Edit button handles both the edit and deleve functionality of the food card.
 * @returns HTMLButtonElement
 */
const EditIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      // If the click is outside the menu, close it
      if (
        menuRef.current &&
        event.target &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:cursor-pointer text-gray-800 dark:text-white"
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
            strokeWidth="2"
            d="M6 12h.01m6 0h.01m5.99 0h.01"
          />
        </svg>
        {isOpen && (
          <div className="absolute right-0 z-10" ref={menuRef}>
            <EditMenu />
          </div>
        )}
      </button>
    </div>
  );
};

export default EditIcon;
