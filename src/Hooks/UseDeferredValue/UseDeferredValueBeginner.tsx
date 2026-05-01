import { useDeferredValue, useState } from "react";

const UseDeferredValueBeginner = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-112.5">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          ⚡ useDeferredValue Demo
        </h1>

        {/* Input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5 transition"
        />

        {/* Live vs Deferred */}
        <div className="space-y-3">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-sm text-green-600 font-medium">
              🟢 Instant Value (Real-time)
            </p>
            <p className="text-lg font-semibold text-green-700">
              {text || "Typing..."}
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-600 font-medium">
              🟡 Deferred Value (Delayed)
            </p>
            <p className="text-lg font-semibold text-yellow-700">
              {deferredText || "Waiting..."}
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4 text-center">
          👉 Deferred value thoda delay se update hota hai (heavy UI ke liye
          useful)
        </p>
      </div>
    </div>
  );
};

export default UseDeferredValueBeginner;
