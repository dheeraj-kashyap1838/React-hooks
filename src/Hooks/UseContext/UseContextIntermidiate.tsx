import { useContext, createContext, useState, useEffect } from "react";

interface ContextType {
  theme: string;
  toggleTheme: () => void;
}

const Context = createContext<ContextType | undefined>(undefined);

export const Child = () => {
  const context = useContext(Context);

  if (!context) throw new Error("Context not found");

  const { theme, toggleTheme } = context;

  return (
    <div className="min-h-screen flex justify-between items-center p-4 bg-(--bg-color) text-(--text-color)">
      <h2 className="text-xl font-bold">My App</h2>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-white text-black rounded"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"));
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
    <Context.Provider value={{ theme, toggleTheme }}>
      <Child />
    </Context.Provider>
  );
};

export default App;
