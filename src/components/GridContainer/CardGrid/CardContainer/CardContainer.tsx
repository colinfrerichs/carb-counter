"use client";

import FoodCard from "./FoodCard/FoodCard";
import ExpandedFoodCard from "./FoodCard/ExpandedFoodCard";
import { motion, AnimatePresence } from "motion/react";
import React, { ChangeEvent, useEffect, useState } from "react";

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

const CardContainer = ({ cardData }: { cardData: CardData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState<CardData>(cardData);

  console.log(data);

  useEffect(() => {
    setData(cardData);
  }, [cardData]); // Dependency list -> this useEffect will only fire when cardData changes.

  /**
   * @function handleExpandCard
   * @description Will update the state of the grid and show the expanded cardData.
   * @returns void
   */
  function handleExpandCard() {
    setIsExpanded(!isExpanded);
  }

  /**
   * @function handleInputUpdate
   * @description Updates the input for a given cardData.
   * This will mimic the endpoint for now, but in the future when a backend is hooked up - the update will be persistent.
   * @returns void
   */
  function handleInputUpdate(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) {
    console.log(e.target.value, field);
    setData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  }

  return (
    <div className="relative">
      <motion.div
        // layoutId={`cardData-${data.id}`}
        className="cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <FoodCard
          collapsedCardData={{
            ...data,
            handleExpandCard: handleExpandCard,
          }}
        />
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layoutId={`data-${data.id}`}
            className="fixed inset-0 z-50 p-6  bg-black/40 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <div className="max-w-2xl mx-auto">
              <ExpandedFoodCard
                expandedCardData={{
                  ...data,
                  handleExpandCard: handleExpandCard,
                  handleInputUpdate: handleInputUpdate,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardContainer;
