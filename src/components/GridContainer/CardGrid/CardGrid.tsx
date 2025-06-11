"use client";

import AddFoodCard from "../AddFoodCard/AddFoodCard";
import CardContainer from "./CardContainer/CardContainer";
import EmptyGrid from "../EmptyGrid";
import React from "react";

interface Cards {
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
const CardGrid = ({ cards }: { cards: Cards[] }) => {
  return cards.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cards.map((card) => (
        <CardContainer key={card.id} cardData={{ ...card }} />
      ))}
      <div className="fixed bottom-0 right-4 p-4">
        <AddFoodCard />
      </div>
    </div>
  ) : (
    <EmptyGrid />
  );
};

export default CardGrid;
