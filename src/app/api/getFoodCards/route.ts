import { NextResponse } from "next/server";

export async function GET() {
  const foodData = [
    {id: 1, meal: "Pizza", carbs: 30, insulin: 5, notes: "Need more insluin, went high after."},
  ];

  return NextResponse.json(foodData);
}