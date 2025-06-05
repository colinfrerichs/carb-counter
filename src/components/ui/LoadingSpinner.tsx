"use client";

import { motion } from "motion/react";
import React from "react";

/**
 * @component LoadingSpinner
 * @description The loading spinner to be used whenever something is loading.
 * @returns HTMLDivElement
 */
const LoadingSpinner = () => {
  return (
    <div
      className="relative h-screen w-full flex flex-col p-4 items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <motion.div
        className="w-14 h-14 rounded-full border-4 border-solid border-white border-t-blue-500"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <span className="sr-only">Loading</span>
    </div>
  );
};

export default LoadingSpinner;
