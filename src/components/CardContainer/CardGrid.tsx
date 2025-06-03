"use client";

import AddFoodCard from "./AddFoodCard/AddFoodCard";
import ExpandedFoodCard from "./FoodCard/ExpandedFoodCard";
import FoodCard from "./FoodCard/FoodCard";
import { AnimatePresence } from "motion/react";
import React, { useState } from "react";

interface CardData {
  calories: number;
  carbs: number;
  fat: number;
  id: number;
  insulin: number;
  meal: string;
  notes: string;
  protein: number;
  reminder: boolean;
}

/**
 * @component CardContainer
 * @description All of the Food Cards will be contained within this component. A grid of cards that will expand.
 * @returns HTMLDivElement
 */
const CardGrid = ({ cards }: { cards: CardData[] }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  /**
   * @function handleExpandCard
   * @description Will update the state of the grid and show the expanded card.
   * @returns void
   */
  function handleExpandCard(id: number | null) {
    setExpandedId(id);
  }

  return (
    <div className="relative bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card) => (
        <FoodCard
          key={card.id}
          data={{
            ...card,
            handleExpandCard: () => handleExpandCard(card.id),
          }}
        />
      ))}

      <AnimatePresence>
        {expandedId !== null &&
          (() => {
            const expandedCard = cards.find((card) => card.id === expandedId);
            if (!expandedCard) return null;
            return (
              <ExpandedFoodCard
                data={{
                  ...expandedCard,
                  expandedId,
                  handleExpandCard: () => handleExpandCard(null),
                }}
              />
            );
          })()}
      </AnimatePresence>
      <div className="fixed bottom-0 right-4 p-4">
        <AddFoodCard />
      </div>
    </div>
  );
};

export default CardGrid;
