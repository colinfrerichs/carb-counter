"use client";

import React from "react";
import { motion } from "motion/react";

interface GlanceData {
  calories: number;
  carbs: number;
  fat: number;
  handleExpandCard: (id: number) => void;
  id: number;
  meal: string;
  protein: number;
  reminder: boolean;
}

/**
 * @component FoodCard
 * @description The entire food card component that will contain the title and the inputs.
 * @returns HTMLDivElement
 */
const FoodCard = ({ data }: { data: GlanceData }) => {
  return (
    <motion.div
      layoutId={`card-${data.id}`}
      onClick={() => data.handleExpandCard(data.id)}
      className="bg-gray-50 h-fit rounded-2xl shadow-xl cursor-pointer hover:scale-105 transform duration-105"
    >
      <div className="bg-blue-500 text-white p-4 rounded-t-2xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{data.meal}</h2>
          {data.reminder && (
            <div>
              <svg
                className="w-6 h-6 text-rose-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="relative items-center justify-center h-fit p-4">
        <div className="grid grid-rows-4 sm:grid-rows-1 gap-2">
          <div className="grid grid-cols-2 border-b-1 border-orange-500">
            <div className="col-span-1 pb-2 pl-2">
              <dt className="font-semibold">Calories</dt>
            </div>
            <div className="col-span-1">
              <dd className="font-semibold">{data.calories}</dd>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b-1 border-orange-500">
            <div className="col-span-1 pb-2 pl-2">
              <dt className="font-semibold">Carbs</dt>
            </div>
            <div className="col-span-1">
              <dd className="font-semibold">{data.carbs}g</dd>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b-1 border-orange-500">
            <div className="col-span-1 pb-2 pl-2">
              <dt className="font-semibold">Fat</dt>
            </div>
            <div className="col-span-1">
              <dd className="font-semibold">{data.fat}g</dd>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b-1 border-orange-500">
            <div className="col-span-1 pb-2 pl-2">
              <dt className="font-semibold">Protein</dt>
            </div>
            <div className="col-span-1">
              <dd className="font-semibold">{data.protein}g</dd>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
