import React, { useCallback, useState } from "react";

type ChildProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Child = React.memo(({ onClick }: ChildProps) => {
  console.log("Child Rendered");

  return (
    <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow mt-4">
      <h2 className="text-blue-700 font-semibold mb-3">👶 Child Component</h2>

      <button
        onClick={onClick}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition"
      >
        Trigger Child Action
      </button>
    </div>
  );
});

const UseCallbackBeginner = () => {
  const [count, setCount] = useState(0);
  const [callback, setCallback] = useState(false);

  const clickfunc = () => {
    console.log("clicked (normal function)");
  };

  const handleClick = useCallback(() => {
    console.log("clicked (memoized)");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-105 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          useCallback Optimization
        </h1>

        <p className="text-sm text-gray-500 mb-4">
          Compare normal vs memoized function behavior 👇
        </p>

        {/* Count Section */}
        <div className="mb-4">
          <p className="text-gray-700">
            Count:{" "}
            <span className="font-bold text-green-600 text-lg">{count}</span>
          </p>

          <button
            onClick={() => setCount(count + 1)}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition"
          >
            Increment Count
          </button>
        </div>

        {/* Toggle Section */}
        <div className="mb-4">
          <button
            onClick={() => setCallback(!callback)}
            className={`px-4 py-2 rounded-lg text-white transition active:scale-95 ${
              callback
                ? "bg-purple-500 hover:bg-purple-600"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            {callback ? "Using useCallback ✅" : "Using Normal Function ❌"}
          </button>
        </div>

        {/* Status Indicator */}
        <div className="text-sm mb-2">
          {callback ? (
            <p className="text-green-600 font-medium">
              Memoized function → Child won't re-render unnecessarily 🚀
            </p>
          ) : (
            <p className="text-red-500 font-medium">
              New function each render → Child re-renders 😬
            </p>
          )}
        </div>

        {/* Child */}
        <Child onClick={callback ? handleClick : clickfunc} />

        <p className="text-xs text-gray-500 mt-4">
          👉 Open console to observe re-renders
        </p>
      </div>
    </div>
  );
};

export default UseCallbackBeginner;
