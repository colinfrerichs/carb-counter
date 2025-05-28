"use client";

import React, { useEffect, useState } from "react";
import AddFoodCard from "./AddFoodCard/AddFoodCard";
import FoodCard from "./FoodCard/FoodCard";
import EmptyContainer from "./FoodCard/EmptyContainer";
import Loading from "./loading";

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
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch cards and bind them to the state of the component.
  useEffect(() => {
    fetch("http://localhost:3000/api/getFoodCards")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      });
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
    setCards((prevCards) => [newCard, ...prevCards]);
  }

  /**
   * @function handleDeleteCard
   * @description Callback function that will handle deleting a card from the state.
   * @returns void
   */
  function handleDeleteCard(id: number) {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  }

  // Render the loading state if the cards are still being fetched.
  if (loading) {
    return <Loading />;
  }

  return cards.length == 0 ? (
    <div>
      <h1>
        <EmptyContainer />
      </h1>
      <div className="fixed bottom-0 right-4 p-4 shadow-2xl justify-end">
        <AddFoodCard onButtonClick={handleAddCard} />
      </div>
    </div>
  ) : (
    <div className="grid grid-rows-2">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 p-4">
        {cards.map((card) => (
          <FoodCard
            key={card.id}
            foodCardProps={{
              carbs: card.carbs,
              handleDelete: handleDeleteCard,
              id: card.id,
              insulin: card.insulin,
              meal: card.meal,
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
