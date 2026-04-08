import { useState } from "react";

const UseStateBeginner = () => {
  console.log("mount");
  const [count, setcount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-80">
        <h1 className="text-5xl font-bold text-blue-950 mb-6">{count}</h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setcount(count + 1)}
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition"
          >
            Increment
          </button>

          <button
            onClick={() => setcount(count - 1)}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseStateBeginner;
