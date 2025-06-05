"use client";

import Input from "../../../../ui/Input";
import TextArea from "../../../../ui/TextArea";
import React, { ChangeEvent, useEffect, useState } from "react";

interface ExpandedData {
  calories: number;
  carbs: number;
  fat: number;
  handleExpandCard: () => void;
  handleInputUpdate: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => void;
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
const ExpandedFoodCard = ({
  expandedCardData,
}: {
  expandedCardData: ExpandedData;
}) => {
  const [cardData, setCardData] = useState(expandedCardData);

  useEffect(() => {
    setCardData(expandedCardData);
  }, [expandedCardData]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 p-6 flex items-center justify-center">
      <div
        className="bg-gray-50 rounded-xl shadow-xl w-full max-w-xl h-full max-h-[90vh] p-6 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <button
            className="cursor-pointer"
            onClick={() => cardData.handleExpandCard()}
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-orange-500"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
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
          <div>
            <h2 className="text-2xl font-bold mb-2 pb-2">{cardData.meal}</h2>
            <div className="border-b-1 border-solid border-gray-400"></div>
          </div>
          <fieldset>
            <div>
              <Input
                inputProps={{
                  field: "calories",
                  handleInputUpdate: cardData.handleInputUpdate,
                  label: "Calories",
                  type: "number",
                  value: expandedCardData.calories,
                }}
              />
            </div>
            <div>
              <Input
                inputProps={{
                  field: "carbs",
                  handleInputUpdate: cardData.handleInputUpdate,
                  label: "Carbs",
                  type: "number",
                  value: expandedCardData.carbs,
                }}
              />
            </div>
            <div>
              <Input
                inputProps={{
                  field: "fat",
                  handleInputUpdate: cardData.handleInputUpdate,
                  label: "Fat",
                  type: "number",
                  value: expandedCardData.fat,
                }}
              />
            </div>
            <div>
              <Input
                inputProps={{
                  field: "insulin",
                  handleInputUpdate: cardData.handleInputUpdate,
                  label: "Insulin",
                  type: "number",
                  value: expandedCardData.insulin,
                }}
              />
            </div>
            <div>
              <Input
                inputProps={{
                  field: "protein",
                  handleInputUpdate: cardData.handleInputUpdate,
                  label: "Protein",
                  type: "number",
                  value: expandedCardData.protein,
                }}
              />
            </div>
            <div>
              <TextArea
                textProps={{
                  field: "notes",
                  handleInputUpdate: cardData.handleInputUpdate,
                  label: "Notes",
                  value: expandedCardData.notes,
                }}
              />
            </div>
          </fieldset>
          <button className="mt-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedFoodCard;
