import { NextResponse } from "next/server";

export async function GET() {
  const foodData = [
    {id: 1, meal: "Pizza", carbs: 30, insulin: 5, notes: "Need more insluin, went high after."},
    {id: 2, meal: "Pasta", carbs: 60, insulin: 10, notes: "Carbed way too much, went low."},
    {id: 3, meal: "Burger", carbs: 15, insulin: 2.5, notes: "Perfect, thanks protein!"},
    {id: 4, meal: "Salad", carbs: 5, insulin: 1, notes: "Great for lunch! No change"},
    {id: 5, meal: "Cookie", carbs: 25, insulin: 3, notes: "Meh... less next time."},
  ];

  return NextResponse.json(foodData);
}