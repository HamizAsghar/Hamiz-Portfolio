
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("Initial theme from localStorage:", savedTheme || "dark");
    return savedTheme || "dark";
  });

  const toggleTheme = (newTheme) => {
    console.log("Toggling theme to:", newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    console.log("Applying theme to document:", theme);
    document.documentElement.classList.remove(
      "dark",
      "light",
      "blue",
      "green",
      "red",
      "purple",
      "pink",
      "teal",
      "yellow",
      "orange"
    );
        document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error("useTheme must be used within a ThemeProvider");
  }
  return context;
};