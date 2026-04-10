  import { useEffect, useState } from "react";

export default function UseEffectVisualizer() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg:string) => {
    setLogs((prev) => [...prev, msg]);
  };

  // ✅ Initial render log
  useEffect(() => {
    addLog("🚀 Initial Render");
  }, []);

  // ✅ Runs when count changes
  useEffect(() => {
    addLog("✅ useEffect executed");

    return () => {
      addLog("🧹 Cleanup function executed");
    };
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">useEffect Working Visualizer</h1>

      {/* Counter */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <p className="text-xl mb-4">Count: {count}</p>

        <button
          onClick={() => {
            addLog("🖱 Button Clicked");
            setCount((prev) => prev + 1);
          }}
          className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Increase Count
        </button>
      </div>

      {/* Logs */}
      <div className="mt-8 w-full max-w-xl bg-black p-4 rounded-xl h-80 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-2">Logs:</h2>

        {logs.map((log, index) => (
          <p key={index} className="text-sm text-green-400">
            {log}
          </p>
        ))}
      </div>
    </div>
  );
}
