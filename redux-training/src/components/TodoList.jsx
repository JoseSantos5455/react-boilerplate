import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
