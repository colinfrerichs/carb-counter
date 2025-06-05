import React from "react";
import CardGrid from "./CardGrid/CardGrid";
import Error from "../ui/Error";

/**
 * @component GridContainer
 * @description The purpose of the container is to be the server component that renders the grid, which is the interactable client component.
 * @returns HTMLDivElement
 */
const GridContainer = async () => {
  const url = "http://localhost:3000/api/getFoodCards";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return <Error props={{ error: String(response.status) }} />;
    }

    const json = await response.json();

    return <CardGrid cards={json} />;
  } catch (error) {
    // let message;
    // if (error instanceof Error) {
    //   message = error.message;
    // } else {
    //   console.log("Uknown error", error);
    // }

    // reportError({ message });
    console.log(error);
  }
};

export default GridContainer;
