import { useRef } from "react";

const UseRefBeginner = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    ref.current?.focus();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-500 to-gray-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-100 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          useRef Focus Demo
        </h1>

        <input
          ref={ref}
          type="text"
          placeholder="Click button to focus me"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition"
        />

        <button
          onClick={handleFocus}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition font-medium"
        >
          Focus Input
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Button click se input auto focus hoga 👀
        </p>
      </div>
    </div>
  );
};

export default UseRefBeginner;
