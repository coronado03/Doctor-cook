"use client";

import { useRouter } from "next/navigation";
import {  useState } from "react";
import { IoSearch, IoSendSharp } from "react-icons/io5";

export const FoodInputSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSend = () => {
    if (inputValue.trim()) {
      router.push(`/food/${inputValue}`);
    }
  };

  return (
    <div className="w-full max-w-lg bg-gray-800 border border-gray-700 rounded-full flex items-center px-5 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <IoSearch size={24} color="white" className="mr-3" />
      <input
        className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
        placeholder="Type a word or sentence"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <IoSendSharp
        size={24}
        color="white"
        className="ml-3 cursor-pointer hover:text-purple-400 transition-colors"
        onClick={handleSend}
      />
    </div>
  );
};
