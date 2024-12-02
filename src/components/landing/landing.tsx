"use client";

import { useState } from "react";
import { FoodInputSearch } from "./search/search";

export const Landing = () => {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Discover Your Next Delicious Recipe!
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Type a word or sentence and we’ll find a recipe for you. <br />
          <span className="italic">
            We are not responsible for how good your next meal might be!
          </span>
        </p>
      </div>

      <FoodInputSearch />

      <p className="mt-6 text-sm text-gray-500">
        Can't think of a word? Try typing "pasta," "chocolate," or "surprise
        me!"
      </p>
    </main>
  );
};
