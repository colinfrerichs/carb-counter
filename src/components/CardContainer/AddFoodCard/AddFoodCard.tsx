"use client";

import React from "react";

interface AddFoodCardProps {
  onButtonClick: () => void;
}

const AddFoodCard = ({ onButtonClick }: AddFoodCardProps) => {
  return <button onClick={onButtonClick}>Add Card</button>;
};

export default AddFoodCard;
