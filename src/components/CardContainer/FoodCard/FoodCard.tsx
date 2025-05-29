"use client";

import React from "react";
import DesktopFoodCard from "./Desktop/DesktopFoodCard";
import MobileFoodCard from "./Mobile/MobileFoodCard";

interface FoodCardProps {
  foodCardProps: {
    calories: number;
    carbs: number;
    fat: number;
    handleDelete: (id: number) => void;
    id: number;
    insulin: number;
    isMobile: boolean;
    meal: string;
    notes: string;
    protein: number;
    reminder: boolean;
  };
}

/**
 * @component FoodCard
 * @description The entire food card component that will contain the title and the inputs.
 * @returns HTMLDivElement
 */
const FoodCard = ({
  foodCardProps: {
    calories,
    carbs,
    fat,
    handleDelete,
    id,
    insulin,
    isMobile,
    meal,
    notes,
    protein,
    reminder,
  },
}: FoodCardProps) => {
  return isMobile ? (
    <MobileFoodCard
      props={{
        calories,
        carbs,
        fat,
        handleDelete,
        id,
        insulin,
        meal,
        notes,
        protein,
        reminder,
      }}
    />
  ) : (
    <DesktopFoodCard
      props={{
        calories,
        carbs,
        fat,
        handleDelete,
        id,
        insulin,
        meal,
        notes,
        protein,
        reminder,
      }}
    />
  );
};

export default FoodCard;
