import React from "react";
import FoodCardInput from "./FoodCardInput";

const FoodCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
      <div className="p-6 rounded">
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
      <div className="p-6 rounded">
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
      <div className="p-6 rounded">
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
      <div className="p-6 rounded">
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
  );
};

export default FoodCard;
