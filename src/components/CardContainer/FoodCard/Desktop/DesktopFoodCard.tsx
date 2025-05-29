import React from "react";

interface Props {
  props: {
    calories: number;
    carbs: number;
    fat: number;
    handleDelete: (id: number) => void;
    id: number;
    insulin: number;
    meal: string;
    notes: string;
    protein: number;
    reminder: boolean;
  };
}

const DesktopFoodCard = ({
  props: {
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
  },
}: Props) => {
  return <div>Hello World</div>;
};

export default DesktopFoodCard;
