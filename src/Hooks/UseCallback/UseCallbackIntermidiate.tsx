import React, { useCallback, useMemo, useState } from "react";

interface ChildProp {
  products: {
    id: string;
    name: string;
  }[];
  onAdd: (id: string) => void;
}

const Child = React.memo(({ products, onAdd }: ChildProp) => {
  console.log("child rendered");

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {products.map((elem) => (
        <div
          key={elem.id}
          className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center"
        >
          <h3 className="text-gray-800 font-medium mb-3">{elem.name}</h3>

          <button
            onClick={() => onAdd(elem.id)}
            className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 active:scale-95 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
});

const UseCallbackIntermidiate = () => {
  const [count, setCount] = useState(0);
console.log("Parent rendered")
  const products = useMemo(
    () => [
      { id: "1", name: "Mobile" },
      { id: "2", name: "Laptop" },
      { id: "3", name: "Android TV" },
      { id: "4", name: "Fridge" },
    ],
    [],
  );

  // ✅ function bhi stable hai
  const addCard = useCallback((id: string) => {
    console.log("product added", id);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-125">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          🚀 Optimized Product List
        </h1>

        {/* Parent Render */}
        <div className="text-center mb-4">
          <p className="text-gray-600 mb-2">
            Parent Render Count:{" "}
            <span className="font-bold text-green-600">{count}</span>
          </p>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition"
          >
            Re-render Parent
          </button>
        </div>

        {/* Info */}
        <p className="text-sm text-gray-500 text-center mb-2">
          👉 Open console → Child will NOT re-render now 😎
        </p>

        {/* Child */}
        <Child products={products} onAdd={addCard} />
      </div>
    </div>
  );
};

export default UseCallbackIntermidiate;
