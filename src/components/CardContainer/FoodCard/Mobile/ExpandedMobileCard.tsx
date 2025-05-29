import React, { useEffect, useState } from "react";

interface Props {
  props: {
    calories: number;
    carbs: number;
    fat: number;
    handleCloseCard: () => void;
    handleDelete: (id: number) => void;
    id: number;
    insulin: number;
    meal: string;
    notes: string;
    protein: number;
    reminder: boolean;
  };
}

/**
 * @component ExpandedMobileCard
 * @description This allows the user to actually update values.
 * @returns HTMLDivElement
 */
const ExpandedMobileCard = ({ props }: Props) => {
  const [cardData, setCardData] = useState({
    calories: 0,
    carbs: 0,
    fat: 0,
    id: 0,
    insulin: 0,
    meal: "",
    notes: "",
    protein: 0,
    reminder: false,
  });

  useEffect(() => {
    setCardData({
      calories: props.calories,
      carbs: props.carbs,
      fat: props.fat,
      id: props.id,
      insulin: props.insulin,
      meal: props.meal,
      notes: props.notes,
      protein: props.protein,
      reminder: props.reminder,
    });
  }, [props]);

  console.log(cardData); // Just to make the error go away.

  return (
    <div className="bg-[#3B82F6] h-full w-full">
      <div className="grid grid-rows-[auto]">
        <div className="p-3">
          <button
            onClick={props.handleCloseCard}
            className="cursor-pointer p-3 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
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
                d="M5 9h4m0 0V5m0 4L4 4m15 5h-4m0 0V5m0 4 5-5M5 15h4m0 0v4m0-4-5 5m15-5h-4m0 0v4m0-4 5 5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-col-1 p-3">
        <button
          onClick={() => props.handleDelete(props.id)}
          className="cursor-pointer bg-red-500 text-white rounded-lg p-3"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpandedMobileCard;
