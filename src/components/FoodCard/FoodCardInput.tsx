"use client";

import React, { ChangeEvent, useId, useState } from "react";

interface FoodCardInputProps {
  inputProps: { inputTitle: string; inputType: string; toUpdate: string };
}

/**
 * @component FoodCardInput
 * @description An HTML input component that will update the passed part of the card.
 * @returns HTMLInputElement
 */
const FoodCardInput = ({
  inputProps: { inputTitle, inputType, toUpdate },
}: FoodCardInputProps) => {
  const id = useId();
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  return (
    <div key={id} className="flex flex-col w-full">
      <h1>{toUpdate}</h1>
      <div className="relative">
        {inputType === "text" ? (
          <input
            className="peer w-full h-f p-3 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 resize-none"
            onChange={handleChange}
            placeholder=" "
            type={inputType}
            value={text}
          />
        ) : (
          <input
            className="peer w-full h-f p-3 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 resize-none"
            onChange={handleChange}
            placeholder=" "
            type={inputType}
            value={text}
          />
        )}
        <label className="absolute left-3 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
          {inputTitle}
        </label>
      </div>
    </div>
  );
};

export default FoodCardInput;
