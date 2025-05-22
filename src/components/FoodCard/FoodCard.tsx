import React from "react";
import TextArea from "./TextArea";

const FoodCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-white p-3">
      <div className="p-6 rounded">
        <div className="flex flex-col">
          <TextArea />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
