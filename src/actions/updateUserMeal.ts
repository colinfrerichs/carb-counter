export default async function updateUserMeal (meal: string) {
  console.log("Updating user meal on server:", { meal });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User meal updated successfully");
    }, 1000);
  });
}
