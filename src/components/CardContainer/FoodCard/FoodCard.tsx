import React from "react";
import EditButton from "../../Edit/EditButton";
import FoodCardTitle from "./FoodCardTitle";
import FoodCardUserInput from "./FoodCardUserInput";

interface FoodCardProps {
  foodCardProps: {
    carbs: number;
    handleDelete: (id: number) => void;
    id: number;
    insulin: number;
    meal: string;
    notes: string;
  };
}

/**
 * @component FoodCard
 * @description The entire food card component that will contain the title and the inputs.
 * @returns HTMLDivElement
 */
const FoodCard = ({
  foodCardProps: { carbs, id, insulin, meal, notes, handleDelete },
}: FoodCardProps) => {
  return (
    <div className="grid grid-rows-[auto] rounded-lg shadow-2xl border-[#E5E7EB] border-1 border-solid">
      <div className="grid grid-cols-2 h-fit rounded-t-lg rounded-b-none items-center bg-[#3B82F6] text-white">
        <div>
          <FoodCardTitle />
        </div>
        <div className="flex justify-end px-6">
          <EditButton editProps={{ id, handleDelete }} />
        </div>
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
