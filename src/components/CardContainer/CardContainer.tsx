"use client";

import AddFoodCard from "./AddFoodCard/AddFoodCard";
import FoodCard from "./FoodCard/FoodCard";
import EmptyContainer from "./FoodCard/EmptyContainer";
import Loading from "./loading";
import React, { useEffect, useState } from "react";

/**
 * @component CardContainer
 * @description All of the Food Cards will be contained within this component.
 * @returns HTMLDivElement
 */
const CardContainer = () => {
  // Create a state to hold the food cards.
  const [cards, setCards] = useState<
    {
      calories: number;
      carbs: number;
      fat: number;
      id: number;
      insulin: number;
      meal: string;
      notes: string;
      protein: number;
      reminder: boolean;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Fetch cards and bind them to the state of the component.
  useEffect(() => {
    fetch("http://localhost:3000/api/getFoodCards")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      });
  }, []);

  // Check if screen is mobile or not to render the right cards and not clutter the DOM.
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  /**
   * @function handleAddCard
   * @description "Endpoint" function that will handle adding a new card to the state.
   * @returns void
   */
  function handleAddCard() {
    // Create a new card with dummy data.
    const newCard = {
      calories: 0,
      carbs: 0,
      fat: 0,
      id: cards.length + 1,
      insulin: 0,
      meal: "New Meal",
      notes: "",
      protein: 0,
      reminder: false,
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

  return (
    <div>
      {cards.length === 0 ? (
        <div>
          <EmptyContainer />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 p-4">
          {cards.map((card) => (
            <FoodCard
              key={card.id}
              foodCardProps={{
                calories: card.calories,
                carbs: card.carbs,
                fat: card.fat,
                handleDelete: handleDeleteCard,
                id: card.id,
                insulin: card.insulin,
                isMobile: isMobile,
                meal: card.meal,
                notes: card.notes,
                protein: card.protein,
                reminder: card.reminder,
              }}
            />
          ))}
        </div>
      )}
      <div className="fixed bottom-0 right-4 p-4">
        <AddFoodCard onButtonClick={handleAddCard} />
      </div>
    </div>
  );
};

export default CardContainer;
