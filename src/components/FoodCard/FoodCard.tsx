import React from "react";
import TextArea from "./TextArea";

const FoodCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-white p-3 shadow-md">
      <div className="bg-red-500 p-6 rounded">
        <div className="flex flex-col">
          <label className="pb-1">Food Name</label>
          <TextArea />
        </div>
      </div>
      <div className="bg-blue-500 p-6 rounded">Column 2</div>
      <div className="bg-yellow-500 p-6 rounded">Column 3</div>
    </div>
  );
};

export default FoodCard;
