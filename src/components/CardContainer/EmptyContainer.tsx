import React from "react";

const EmptyContainer = () => {
  return (
    <div className="relative h-screen w-full flex flex-col p-4 text-center shadow-2xl rounded-2xl items-center justify-center">
      <h1 className="font-bold text-2xl text-[#3B82F6]">No Cards</h1>
      <p className="p-4">Press the + button below to begin adding them!</p>
    </div>
  );
};

export default EmptyContainer;
