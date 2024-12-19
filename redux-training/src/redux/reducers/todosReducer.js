const initState = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Learn Redux", completed: false },
  { id: 3, title: "Learn React Native", completed: false },
];

export default function todosReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== payload);

    default:
      return state;
  }
}
