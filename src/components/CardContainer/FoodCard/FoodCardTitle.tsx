import React from "react";

interface TitleProps {
  titleProps: {
    title: string;
  };
}

/**
 * @component FoodCardTitle
 * @description An HTML component that will display the title of the food card.
 * @returns HTMLDivElement
 */
const FoodCardTitle = ({ titleProps: { title } }: TitleProps) => {
  return (
    <div className="px-4 py-3">
      <h1 className="flex font-bold text-2xl">{title}</h1>
    </div>
  );
};

export default FoodCardTitle;
