import { useState } from "react";

const Intermidiate = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Email Input
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition"
        />

        <p className="text-gray-700 text-center">
          Your Email: <span className="font-medium text-blue-600">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default Intermidiate;
