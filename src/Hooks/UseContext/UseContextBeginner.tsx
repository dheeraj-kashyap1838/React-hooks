import { createContext, useContext } from "react";

const userContext = createContext<string | null>(null);

export const Child = () => {
  const user = useContext(userContext);
  return (
    <div className="bg-blue-100 p-4 rounded-xl mt-4 shadow">
      <h2 className="text-lg font-semibold text-blue-700">Child Component</h2>
      <p className="text-gray-700 mt-2">
        Hello <span className="font-bold text-blue-600">{user}</span>
      </p>
    </div>
  );
};

function main() {
  return (
    <userContext.Provider value={"dheeraj"}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-105 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Context API Demo
          </h1>

          <div className="bg-green-100 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-green-700">
              App (Provider)
            </h2>
            <p className="text-gray-700 mt-2">
              Providing user:{" "}
              <span className="font-bold text-green-600">Dheeraj</span>
            </p>

            {/* Child inside Provider */}
            <Child />
          </div>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default main;
