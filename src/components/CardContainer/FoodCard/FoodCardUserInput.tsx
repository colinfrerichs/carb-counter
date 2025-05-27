"use client";

import React, { ChangeEvent, useEffect, useId, useState } from "react";

interface FoodCardInputProps {
  inputProps: {
    data?: string | number;
    title: string;
    type?: string;
    toUpdate: string;
  };
}

/**
 * @component FoodCardInput
 * @description An HTML input component that will update the passed part of the card.
 * @returns HTMLInputElement
 */
const FoodCardInput = ({
  inputProps: { data, title, type, toUpdate },
}: FoodCardInputProps) => {
  const id = useId();
  const [text, setText] = useState(type === "number" ? Number(data) : data);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setText(value);
  };

  useEffect(() => {
    setText(type === "number" ? Number(data) : data);
    console.log(toUpdate); // TODO: this is just to get rid of the error - hook this up to API when a backend is ready.
  }, [data, type]);

  return (
    <div key={id} className="flex flex-col w-full pt-2">
      <div className="relative">
        {type ? (
          <input
            className="peer w-full h-f p-3 border-b-2 border-[#E5E7EB] text-[#4B5563] focus:outline-none focus:border-[#3B82F6] resize-none"
            onChange={handleChange}
            placeholder=" "
            type={type}
            value={text}
          />
        ) : (
          <textarea
            className="peer w-full h-f p-3 border-b-2 border-[#E5E7EB] text-[#4B5563] focus:outline-none focus:border-[#3B82F6] resize-none"
            onChange={handleChange}
            placeholder=" "
            value={text}
          />
        )}
        <label className="absolute left-3 -top-3.5 text-[#9CA3AF] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#9CA3AF] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#3B82F6] peer-focus:text-sm">
          {title}
        </label>
      </div>
    </div>
  );
};

export default FoodCardInput;
