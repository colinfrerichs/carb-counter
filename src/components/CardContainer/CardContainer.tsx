import React from "react";
import FoodCard from "../FoodCard/FoodCard";

type FakeData = {
  id: number;
  meal: string;
  carbs: number;
  insulin: number;
  notes: string;
};

async function fetchCards() {
  const response = await fetch("http://localhost:3000/api/getFoodCards");
  const data = await response.json();

  return data;
}

/**
 * @component CardContainer
 * @description All of the Food Cards will be contained within this component.
 * @returns HTMLDivElement
 */
const CardContainer = async () => {
  const data: FakeData[] = await fetchCards();
  console.log("Fetched data:", data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 p-4">
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 p-4">
          {data.map((card) => (
            <FoodCard
              key={card.id}
              foodCardProps={{
                meal: card.meal,
                carbs: card.carbs,
                insulin: card.insulin,
                notes: card.notes,
              }}
            />
          ))}
        </div>
        <div className="p-4">
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
