import React from "react";
import FoodCardInput from "./FoodCardInput";
import FoodCardTitle from "./FoodCardTitle";

interface FoodCardProps {
  foodCardProps: {
    meal: string;
    carbs: number;
    insulin: number;
    notes: string;
  };
}

/**
 * @component FoodCard
 * @description The entire food card component that will contain the title and the inputs.
 * @returns HTMLDivElement
 */
const FoodCard = ({
  foodCardProps: { meal, carbs, insulin, notes },
}: FoodCardProps) => {
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
                data: meal,
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
                data: carbs,
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
                data: insulin,
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
                data: notes,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
