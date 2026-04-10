import { useState } from "react";

const UseStateBeginner = () => {
  console.log("mount");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<(string | { obj: string })[]>([]);

  const handlechange = () => {
    setItems((prev) => [...prev, "a"]);
    setItems((prev) => {
      const newarry = [...prev, "b", { obj: "c" }];
      return newarry;
    });
  };
  console.log("items", items);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-80">
        <h1 className="text-5xl font-bold text-blue-950 mb-6">{count}</h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition"
          >
            Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition"
          >
            Decrement
          </button>
        </div>
        <button
          onClick={handlechange}
          className="px-5 py-2 bg-blue-500 mt-2.5   text-white rounded-lg hover:bg-blue-600 active:scale-95 transition"
        >
          add element
        </button>
        <div>
          {items.map((elem) => (
            <p className="text-5xl font-bold text-blue-950 mb-6">
              {typeof elem === "string" ? elem : elem.obj}
            </p>  
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseStateBeginner;
