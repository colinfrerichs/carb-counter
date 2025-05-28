import React from "react";

const EmptyContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 text-center">
      <h1 className="font-bold text-2xl text-[#3B82F6]">No Cards</h1>
      <p className="p-4">Press the + button below to begin adding them!</p>
    </div>
  );
};

export default EmptyContainer;
