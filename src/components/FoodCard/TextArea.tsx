"use client";

import React, { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "lodash";
import updateUserMeal from "@/actions/updateUserMeal";

/**
  COMPONENT: TextArea
  DESCRIPTION: A simple text area component that updates the user meal on the server.
**/
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
    <div>
      <textarea
        className="w-full resize-none border-gray-500 rounded-lg"
        onChange={handleChange}
        value={text}
      />
    </div>
  );
};

export default TextArea;
