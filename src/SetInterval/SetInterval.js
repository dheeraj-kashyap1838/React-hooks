import { useEffect, useState } from "react";

const SetInterval = () => {
  const [count, setCount] = useState(0);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  

  return (
    <div>
      counter
      <h1>{count}</h1>
    </div>
  );
};

export default SetInterval;
