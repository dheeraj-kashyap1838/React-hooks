import { createContext, useContext, useEffect, useState } from "react";

interface valueProp {
  theme: string;
  themeToggle: () => void;
  user: { name: string; role: string };
}

const context = createContext<valueProp | null>(null);
export const Child = () => {
  const contextValue = useContext(context);
  if (!contextValue) return null;

  const { user, theme, themeToggle } = contextValue;
  return (
    <div className="min-h-screen flex justify-between items-center p-4 bg-(--bg-color) text-(--text-color)">
      <h2 className="text-lg font-semibold ">Child Component</h2>
      <div className="bg-blue-100 p-4 rounded-xl mt-4 shadow m-auto ">
        <p className="text-gray-700 mt-2">
          Hello <span className="font-bold text-blue-600">{user.name}</span>
        </p>
        <button
          onClick={() => themeToggle()}
          className="px-4 py-2 bg-white text-black rounded"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </div>
  );
};

const UseContextAdvance = () => {
  const user = { name: "dheeraj", role: "front end devloper" };
  const [theme, setTheme] = useState("dark");

  const themeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <context.Provider value={{ theme, user, themeToggle }}>
      <Child />
    </context.Provider>
  );
};

export default UseContextAdvance;
