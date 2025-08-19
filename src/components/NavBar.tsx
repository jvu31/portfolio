"use client";

import { useState, useEffect } from "react";
const NavBar = ({ setPage }: { setPage: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState("about");

  const pages = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "cats",

  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (pageName: string) => {
    setPage(pageName);
    setActivePage(pageName);
  };

  return (
    <div
      className={`
                fixed top-0 left-0 right-0 z-50 flex justify-center space-x-4 py-4 border-b transition-colors duration-300
                ${
                  isScrolled
                    ? "bg-white/80 backdrop-blur-md border-lightest_gray/75"
                    : "bg-white border-lightest_gray"
                }
            `}
    >
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handleNavClick(page)}
          className={`py-2 px-1 transition-all duration-200 ease-in-out transform
            ${
              activePage === page
                ? "text-purple border-b-2 border-indigo-600 font-semibold"
                : "hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600 hover:scale-105"
            }`}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
