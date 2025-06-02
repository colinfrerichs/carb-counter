import React from "react";
import CardGrid from "./CardGrid";

/**
 * @component CardContainer
 * @description The purpose of the container is to be the server component that renders the grid, which is the interactable client component.
 * @returns HTMLDivElement
 */
const CardContainer = async () => {
  const url = "http://localhost:3000/api/getFoodCards";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // return error card with response.status
    }

    const json = await response.json();

    return <CardGrid cards={json} />;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;

    reportError({ message });
  }
};

export default CardContainer;
