"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleSignUpClick = () => {
    router.push("/sign-up");
  };

  const handleLogoutClick = () => {
    sessionStorage.removeItem("access_token");
    setIsAuthenticated(false);
    router.push("/");
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 dark:bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="text-xl font-semibold cursor-pointer"
          onClick={handleHomeClick}
        >
          Recipe Unlocker!
        </div>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogoutClick}
              className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={handleLoginClick}
                className="text-black bg-white hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Login
              </button>
              <button
                onClick={handleSignUpClick}
                className="text-black bg-white hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
