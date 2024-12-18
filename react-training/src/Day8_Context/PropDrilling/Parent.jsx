import { useCount } from "../context/CountContext";
import A from "./A";

export default function Parent() {
  const { count, increment } = useCount();
  console.log("Parent rendering...");
  return (
    <div className="container">
      <h2>Parent: {count}</h2>
      <button onClick={increment}>Add</button>
      <A />
    </div>
  );
}
