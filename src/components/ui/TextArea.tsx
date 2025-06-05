import { motion } from "motion/react";
import React, { ChangeEvent, useState } from "react";

interface FloatingTextAreaProps {
  field: string;
  label: string;
  handleInputUpdate: (
    e: ChangeEvent<HTMLTextAreaElement>,
    field: string
  ) => void;
  value: string | number;
}

const TextArea = ({ textProps }: { textProps: FloatingTextAreaProps }) => {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || textProps.value;

  return (
    <div className="relative w-full max-w-md mx-auto my-4 p-3">
      <label className="block relative">
        <motion.span
          className="absolute pointer-events-none transform -translate-y-1/2 px-1 bg-white"
          animate={{
            color: isFloating ? "#3B82F6" : "#6B7280",
            fontSize: isFloating ? "0.75rem" : "1rem",
            left: isFloating ? "0.5rem" : "0.75rem",
            top: isFloating ? 0 : "50%",
          }}
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {textProps.label}
        </motion.span>

        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onBlur={() => setFocused(false)}
          onChange={(e) => textProps.handleInputUpdate(e, textProps.field)}
          onFocus={() => setFocused(true)}
          value={textProps.value}
        />
      </label>
    </div>
  );
};

export default TextArea;
