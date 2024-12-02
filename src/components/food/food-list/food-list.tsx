"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { FoodCard } from "../food-card/food-card";

const FoodList = () => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { query } = useParams();

  const keyword = Array.isArray(query) ? query[0] : query;

  const fetchData = async () => {
    if (!keyword) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/recipes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keyword: keyword,
          loadImages: false,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setFoodData(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [keyword]);

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center py-12 px-6">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {foodData.map((item, index) => (
            <FoodCard key={index} foodItem={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodList;
