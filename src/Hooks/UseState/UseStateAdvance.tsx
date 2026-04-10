import { useState } from "react";

export default function BatchingDebug() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg :string) => {
    setLogs((prev) => [...prev, msg]);
  };

  const wrongUpdate = () => {
    setLogs([]);
    addLog("Clicked WRONG button");
    addLog(`Initial count = ${count}`);

    setTimeout(() => {
      addLog(`setCount(${count} + 1)`);
      setCount(count + 1);

      addLog(`setCount(${count} + 1)`);
      setCount(count + 1);

      addLog("Both updates used SAME old value 😬");
    }, 1000);
  };

  const correctUpdate = () => {
    setLogs([]);
    addLog("Clicked CORRECT button");
    addLog(`Initial count = ${count}`);

    setTimeout(() => {
      addLog("setCount(prev => prev + 1)");
      setCount((prev) => {
        addLog(`prev was ${prev}, now ${prev + 1}`);
        return prev + 1;
      });

      addLog("setCount(prev => prev + 1)");
      setCount((prev) => {
        addLog(`prev was ${prev}, now ${prev + 1}`);
        return prev + 1;
      });

      addLog("Each update got latest value ✅");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-112.5">
        <h1 className="text-3xl font-bold text-center mb-4">
          Count: <span className="text-blue-600">{count}</span>
        </h1>

        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={wrongUpdate}
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            ❌ Wrong Update
          </button>

          <button
            onClick={correctUpdate}
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            ✅ Correct Update
          </button>
        </div>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg h-48 overflow-y-auto text-sm font-mono">
          {logs.length === 0 ? (
            <p>No logs yet...</p>
          ) : (
            logs.map((log, index) => <p key={index}>➤ {log}</p>)
          )}
        </div>
      </div>
    </div>
  );
}
