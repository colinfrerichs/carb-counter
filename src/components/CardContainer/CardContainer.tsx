import React from "react";

type FakeData = {
  id: number;
  meal: string;
  carbs: number;
  insulin: number;
  notes: string;
};

async function fetchCards() {
  const response = await fetch("http://localhost:3000/api/getFoodCards", {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

const CardContainer = async () => {
  const data: FakeData[] = await fetchCards();
  console.log("Fetched data:", data);

  return <div>CardContainer</div>;
};

export default CardContainer;
