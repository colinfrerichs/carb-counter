import React from "react";

/**
 * @component FoodCardTitle
 * @description An HTML component that will display the title of the food card.
 * @returns HTMLDivElement
 */
const FoodCardTitle = () => {
  return (
    <div className="px-4 py-3">
      <h1 className="flex font-bold text-2xl">Pizza</h1>
    </div>
  );
};

export default FoodCardTitle;
