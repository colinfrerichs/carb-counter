import React from "react";
import FoodCardUserInput from "./FoodCardUserInput";
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
    <div className="FFFFFF grid grid-rows-[auto] rounded-lg shadow-2xl border-[#E5E7EB]">
      <div className="h-fit">
        <FoodCardTitle />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-4">
        <div className="flex">
          <FoodCardUserInput
            inputProps={{
              title: "Meal",
              type: "text",
              toUpdate: "meal",
              data: meal,
            }}
          />
        </div>
        <div className="flex">
          <FoodCardUserInput
            inputProps={{
              title: "Carb Count",
              type: "number",
              toUpdate: "carbs",
              data: carbs,
            }}
          />
        </div>
        <div className="flex">
          <FoodCardUserInput
            inputProps={{
              title: "Units Delivered",
              type: "number",
              toUpdate: "insulin",
              data: insulin,
            }}
          />
        </div>
        <div className="flex">
          <FoodCardUserInput
            inputProps={{
              title: "Notes",
              toUpdate: "notes",
              data: notes,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
