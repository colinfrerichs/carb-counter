import React from "react";
import EditIcon from "./EditIcon";

/**
 * @component FoodCardTitle
 * @description An HTML component that will display the title of the food card.
 * @returns HTMLDivElement
 */
const FoodCardTitle = () => {
  return (
    <div className="grid grid-cols-2 bg-[#3B82F6] text-white rounded-t-lg rounded-b-none px-4 py-3">
      <div>
        <h1 className="font-bold">Pizza</h1>
      </div>
      <div className="flex justify-end">
        <EditIcon />
      </div>
    </div>
  );
};

export default FoodCardTitle;
