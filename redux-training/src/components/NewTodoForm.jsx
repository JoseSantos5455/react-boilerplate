import React from "react";
import { useDispatch } from "react-redux";

export default function NewTodoForm() {
  const [newTodo, setNewTodo] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        // bad practice, but for now, we will use this
        id: Math.floor(Math.random() * 1000),
        title: newTodo,
        completed: false,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
