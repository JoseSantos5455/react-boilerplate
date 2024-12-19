import React from "react";
import { useDispatch } from "react-redux";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;

  const dispatch = useDispatch();

  const deleteById = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div>
      {/* <input type="checkbox" checked={completed} /> */}
      <div>{title}</div>

      <button>Edit</button>
      <button onClick={() => deleteById(id)}>Delete</button>
      <button>Complete</button>
    </div>
  );
}
