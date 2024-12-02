import FoodList from "./food-list/food-list";

export default function FoodSection() {
  return (
    <main className="w-full bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r text-center py-6 from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Here is a list of delicious recipes!
      </h1>
      <FoodList />
    </main>
  );
}
