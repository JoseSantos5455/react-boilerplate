import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const _count = localStorage.getItem("count");
    if (_count) {
      setCount(Number(_count));
    }
  }, []);

  // WIP: come back to explain this later
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", newCount);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
