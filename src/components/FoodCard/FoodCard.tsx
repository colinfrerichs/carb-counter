import React from "react";
import FoodCardInput from "./FoodCardInput";
import FoodCardTitle from "./FoodCardTitle";

/**
 * @component FoodCard
 * @description The entire food card component that will contain the title and the inputs.
 * @returns HTMLDivElement
 *
 * @thoughts
 * This component needs to be able to pull data and populate it the child components and update them.
 * Lets work on this later, as we don't have a backend yet.
 */
const FoodCard = () => {
  return (
    <div className="grid grid-rows-2">
      <div className="bg-rose-500 mx-6 rounded-lg">
        <FoodCardTitle />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
        <div className="pl-6 rounded">
          <div className="flex">
            <FoodCardInput
              inputProps={{
                inputTitle: "Meal",
                inputType: "text",
                toUpdate: "meal",
              }}
            />
          </div>
        </div>
        <div className="px-6 rounded">
          <div className="flex">
            <FoodCardInput
              inputProps={{
                inputTitle: "Carb Count",
                inputType: "number",
                toUpdate: "carbs",
              }}
            />
          </div>
        </div>
        <div className="px-6 rounded">
          <div className="flex">
            <FoodCardInput
              inputProps={{
                inputTitle: "Units Delivered",
                inputType: "number",
                toUpdate: "insulin",
              }}
            />
          </div>
        </div>
        <div className="pr-6 rounded">
          <div className="flex">
            <FoodCardInput
              inputProps={{
                inputTitle: "Notes",
                inputType: "text",
                toUpdate: "notes",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
