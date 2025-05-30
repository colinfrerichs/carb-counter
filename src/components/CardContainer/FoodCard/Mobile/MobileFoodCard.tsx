"use client";

import ExpandedMobileCard from "./ExpandedMobileCard";
import FoodCardTitle from "../FoodCardTitle";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

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

/**
 * @component MobileFoodCard
 * @description The mobile version of the card. Expansion is meant to fully cover screen - the animation differs strongly from the Desktop version.
 * @returns HTMLDivElement
 */
const MobileFoodCard = ({
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
  const [open, setOpen] = useState(false);

  function handleCloseCard() {
    setOpen(false);
  }

  return (
    <AnimatePresence>
      <motion.div
        animate={
          open
            ? {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 50,
                padding: "1rem",
              }
            : {
                width: "100%",
                height: "fit-content",
              }
        }
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center shadow-lg overflow-auto text-white"
      >
        {open ? (
          <ExpandedMobileCard
            props={{
              calories,
              carbs,
              fat,
              handleCloseCard,
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
          <div
            onClick={() => setOpen(!open)}
            className="grid grid-rows-[auto] rounded-lg w-full hover:cursor-pointer"
          >
            <div className="h-fit rounded-t-lg rounded-b-none bg-[#3B82F6] text-white">
              <div>
                <FoodCardTitle titleProps={{ title: meal }} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-[#E5E7EB] border-1 border-solid shadow-2xl">
              <div className="grid grid-cols-2">
                <h1 className="text-[#111827] font-bold">Carbs:</h1>
                <p className="text-[#4B5563]">{carbs}g</p>
              </div>
              <div className="grid grid-cols-2">
                <h1 className="text-[#111827] font-bold">Fat:</h1>
                <p className="text-[#4B5563]">{fat}g</p>
              </div>
              <div className="grid grid-cols-2">
                <h1 className="text-[#111827] font-bold">Protein:</h1>
                <p className="text-[#4B5563]">{protein}g</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileFoodCard;
