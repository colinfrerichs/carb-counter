"use client";

import React, { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "lodash";
import updateUserMeal from "@/actions/updateUserMeal";

const TextArea = () => {
  const [text, setText] = useState("");

  const handleUpdate = useCallback(
    debounce((value: string) => updateUserMeal(value), 500),
    [updateUserMeal]
  );

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    handleUpdate(value);
  };

  return (
    <div className="relative">
      <textarea
        className="peer w-full h-f p-3 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 resize-none"
        onChange={handleChange}
        placeholder=" "
        value={text}
      />
      <label className="absolute left-3 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
        Meal
      </label>
    </div>
  );
};

export default TextArea;
