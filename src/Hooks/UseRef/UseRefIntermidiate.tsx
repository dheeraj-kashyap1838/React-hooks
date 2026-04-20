import { useEffect, useRef, useState } from "react";

const UseRefIntermidiate = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    ref.current = count;
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-700">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 w-[320px] text-center">
        <h2 className="text-2xl font-bold text-white mb-6">useRef Counter</h2>

        <div className="space-y-4">
          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-gray-300 text-sm">Current Value</p>
            <h1 className="text-3xl font-bold text-white">{count}</h1>
          </div>

          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-gray-300 text-sm">Previous Value</p>
            <h1 className="text-3xl font-bold text-yellow-300">
              {ref.current}
            </h1>
          </div>
        </div>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="mt-6 w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-200 active:scale-95"
        >
          Increase Count 🚀
        </button>
      </div>
    </div>
  );
};

export default UseRefIntermidiate;
