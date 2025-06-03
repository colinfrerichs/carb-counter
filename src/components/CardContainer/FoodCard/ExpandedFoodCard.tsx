"use client";

import { motion } from "motion/react";
import React, { ChangeEvent, useEffect, useState } from "react";

interface ExpandedData {
  calories: number;
  carbs: number;
  expandedId: number;
  fat: number;
  handleExpandCard: (id: null) => void;
  id: number;
  insulin: number;
  meal: string;
  notes: string;
  protein: number;
  reminder: boolean;
}

/**
 * @component ExpandedFoodCard
 * @description An HTML input component that will update the passed part of the card.
 * @returns HTMLInputElement
 */
const ExpandedFoodCard = ({ data }: { data: ExpandedData }) => {
  const [cardData, setCardData] = useState<ExpandedData>(data);

  useEffect(() => {
    setCardData(data);
  }, [data]);

  /**
   * @function handleInputUpdate
   * @description Updates the input for a given card.
   * This will mimic the endpoint for now, but in the future when a backend is hooked up - the update will be persistent.
   * @returns void
   */
  function handleInputUpdate(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) {
    setCardData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/40 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => cardData.handleExpandCard(null)}
      />

      <motion.div
        layoutId={`card-${cardData.expandedId}`}
        className="fixed top-0 left-0 w-full h-full z-50 p-6 flex items-center justify-center"
      >
        <motion.div
          className="bg-gray-50 rounded-xl shadow-xl w-full max-w-xl h-full max-h-[90vh] p-6 overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <button
              onClick={() => cardData.handleExpandCard(null)}
              className="cursor-pointer pb-4"
            >
              <svg
                className="w-6 h-6 text-orange-500"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-rows-auto gap-4">
            <h2 className="text-2xl font-bold mb-2">{cardData.meal}</h2>
            {/* <input
              onChange={(e) => handleInputUpdate(e, "calories")}
              placeholder="Calories"
              type="number"
              value={cardData.calories}
            /> */}
            {/* <div className="relative"></div> */}
            <input
              onChange={(e) => handleInputUpdate(e, "carbs")}
              placeholder="Carbs"
              type="number"
              value={cardData.carbs}
            />
            <input
              onChange={(e) => handleInputUpdate(e, "fat")}
              placeholder="Fat"
              type="number"
              value={cardData.fat}
            />
            <input
              onChange={(e) => handleInputUpdate(e, "insulin")}
              placeholder="Insulin"
              type="number"
              value={cardData.insulin}
            />
            <input
              onChange={(e) => handleInputUpdate(e, "protein")}
              placeholder="Protein"
              type="number"
              value={cardData.protein}
            />
            <textarea
              onChange={(e) => handleInputUpdate(e, "notes")}
              placeholder="Notes"
              value={cardData.notes}
            />
            <button className="mt-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer">
              Delete
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ExpandedFoodCard;
