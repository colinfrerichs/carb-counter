import { NextResponse } from "next/server";

export async function GET() {
  const foodData = [
    {
      calories: 610,
      carbs: 43,
      fat: 24,
      id: 0,
      insulin: 6.5,
      meal: "Double Double", 
      notes: "Went high after, change how bolus works over time.", 
      protein: 26, 
      reminder: false
    },
    {
      calories: 125,
      carbs: 2,
      fat: 1,
      id: 1,
      insulin: 1.25,
      meal: "Cucumbers", 
      notes: "Easy snack.", 
      protein: 0, 
      reminder: false
    },
    {
      calories: 1095,
      carbs: 45,
      fat: 55,
      id: 2,
      insulin: 9,
      meal: "Ice Cream", 
      notes: "Went high - should adjust next time.", 
      protein: 4, 
      reminder: true
    },
    {
      calories: 250,
      carbs: 3,
      fat: 2,
      id: 3,
      insulin: 4.5,
      meal: "Sourdough Bread", 
      notes: "Perfect, np.", 
      protein: 2, 
      reminder: false
    },
    {
      calories: 890,
      carbs: 40,
      fat: 5,
      id: 4,
      insulin: 9,
      meal: "Pasta", 
      notes: "Went low, too many units delivered.", 
      protein: 4, 
      reminder: true
    },
    {
      calories: 650,
      carbs: 38,
      fat: 20,
      id: 5,
      insulin: 7.5,
      meal: "Big Mac", 
      notes: "No adjustments needed.", 
      protein: 25, 
      reminder: false
    },
  ];

  return NextResponse.json(foodData);
}