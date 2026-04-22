import { useCallback, useState } from "react";

const UseCallbackAdvance = () => {
  const [query, setQuery] = useState("");

  const fetchData = useCallback((string: string) => {
    console.log("fetching data", string);
  }, []);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    fetchData(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-105">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          🔍 Search Demo
        </h1>

        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handlechange}
            placeholder="Search something..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 transition"
          />

          {/* Icon */}
          <span className="absolute right-3 top-3 text-gray-400">🔎</span>
        </div>

        {/* Live Preview */}
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-3">
          <p className="text-sm text-gray-500">Current Query:</p>
          <p className="text-gray-800 font-medium">
            {query || "Type to search..."}
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-3 text-center">
          👉 Check console → fetchData is called on every input change
        </p>
      </div>
    </div>
  );
};

export default UseCallbackAdvance;
