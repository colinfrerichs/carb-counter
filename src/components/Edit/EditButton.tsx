import React, { useState, useEffect, useRef } from "react";

interface EditButtonProps {
  editProps: {
    handleDelete: (id: number) => void;
    id: number;
  };
}

/**
 * @component EditIcon
 * @description Edit button handles both the edit and deleve functionality of the food card.
 * @returns HTMLButtonElement
 */
const EditButton = ({ editProps: { id, handleDelete } }: EditButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
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
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10" ref={menuRef}>
          <div className="border-[#E5E7EB] bg-white border-1 border-solid shadow-2xl rounded-lg hover:cursor-pointer">
            <button
              onClick={() => handleDelete(id)}
              className="w-full px-4 py-2 text-[#4B5563] font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditButton;
