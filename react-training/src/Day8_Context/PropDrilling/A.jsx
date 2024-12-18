import { useCount } from "../context/CountContext";
import B from "./B";

export default function A() {
  // you tell it which context you want to use
  // useContext returns the value of the context
  const { count } = useCount();

  //   console.log("A rendering...");
  return (
    <div className="container">
      <div>This is a A</div>
      <div>Value: {count}</div>
      <B />
    </div>
  );
}
