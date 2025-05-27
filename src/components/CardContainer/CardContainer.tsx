"use client";

import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";
import AddFoodCard from "./AddFoodCard/AddFoodCard";

/**
 * @component CardContainer
 * @description All of the Food Cards will be contained within this component.
 * @returns HTMLDivElement
 */
const CardContainer = () => {
  // Create a state to hold the food cards.
  const [cards, setCards] = useState<
    {
      id: number;
      meal: string;
      carbs: number;
      insulin: number;
      notes: string;
    }[]
  >([]);

  // Fetch cards and bind them to the state of the component.
  useEffect(() => {
    fetch("http://localhost:3000/api/getFoodCards")
      .then((response) => response.json())
      .then(setCards);
  }, []);

  /**
   * @function handleAddCard
   * @description "Endpoint" function that will handle adding a new card to the state.
   * @returns void
   */
  function handleAddCard() {
    // Create a new card with dummy data.
    const newCard = {
      id: cards.length + 1,
      meal: "New Meal",
      carbs: 0,
      insulin: 0,
      notes: "",
    };

    // Update the state with the new card.
    setCards((prevCards) => [...prevCards, newCard]);
  }

  return (
    <div className="grid grid-rows-2">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 p-4">
        {cards.map((card) => (
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
      <div className="fixed bottom-0 right-4 p-4 shadow-2xl justify-end">
        <AddFoodCard onButtonClick={handleAddCard} />
      </div>
    </div>
  );
};

export default CardContainer;
