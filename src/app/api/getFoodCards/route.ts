import { NextResponse } from "next/server";

export async function GET() {
  const foodData = [
    {
      calories: 610,
      carbs: 43,
      fat: 24,
      id: 1,
      insulin: 6.5,
      meal: "Double Double", 
      notes: "Went high after, change how bolus works over time.", 
      protein: 26, 
      reminder: false
    },
  ];

  return NextResponse.json(foodData);
}