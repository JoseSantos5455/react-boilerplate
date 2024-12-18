import { createContext, useContext, useReducer, useState } from "react";

export const CountContext = createContext();

// action: { type, payload }
function countReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export function CountProvider({ children }) {
  const [count, dispatch] = useReducer(countReducer, 0);
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount((prev) => prev + 1);
  // };
  // const decrement = () => {
  //   setCount((prev) => prev - 1);
  // };
  // const reset = () => {
  //   setCount(0);
  // };

  return (
    // all children of CountContext.Provider will have access to the value
    <CountContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  return useContext(CountContext);
}
