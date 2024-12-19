import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const count = useSelector((state) => {
    // the argument state is the global state
    // console.log(state);

    // the return value is the return value of the callback function
    return state.count;
  });

  const theme = useSelector((state) => state.theme);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // const increment = () => {
  //   dispatch({ type: "INCREMENT" });
  // };

  // const incrementByAmount = () => {
  //   dispatch({ type: "INCREMENT_BY_AMOUNT", payload: 5 });
  // };

  function toggleTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  return (
    <div className={theme === "light" ? "app--light" : "app--dark"}>
      <h1>Redux</h1>
      {/* <div>Count: {count.value}</div> */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Remaining todos: {todos.length}</h1>
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
