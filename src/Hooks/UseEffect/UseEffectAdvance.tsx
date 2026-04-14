import { useEffect, useState } from "react";

const UseEffectAdvance = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handlerize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlerize);

    return () => {
      window.removeEventListener("resize", handlerize);
      console.log("cleanupfunction");
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-105 text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Screen Width Tracker
        </h1>

        <div className="bg-gray-900 text-green-400 text-3xl font-mono py-6 rounded-xl shadow-inner">
          {width}px
        </div>

        <p className="text-gray-500 text-sm mt-4">
          Resize your window to see live updates 👀
        </p>
      </div>
    </div>
  );
};

export default UseEffectAdvance;
