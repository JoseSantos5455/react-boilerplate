import { useCount } from "../context/CountContext";

export default function B() {
  const { count } = useCount();
  //   console.log("B rendering...");
  return (
    <div className="container">
      <div>This is a B</div>
      <div>Value: {count}</div>
      <C />
    </div>
  );
}

function C() {
  const { count, increment } = useCount();
  //   console.log("C rendering...");
  return (
    <div className="container">
      <div>This is a C</div>
      <div>Value: {count}</div>
      <button onClick={increment}>Add</button>
    </div>
  );
}
