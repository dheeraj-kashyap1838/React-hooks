import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState<{ name: string; id: number }[]>([]);

  async function fetchApi() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUser(data);

    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-500">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Users List</h1>
        {user.map((u) => (
          <div key={u.id} className="bg-gray-200 p-2 mb-2 rounded">
            {u.name}
          </div>
        ))}
      </div>
    </div>
  );
}
