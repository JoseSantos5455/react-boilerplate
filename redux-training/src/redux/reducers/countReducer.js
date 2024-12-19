const initState = { value: 0 };

export default function countReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "INCREMENT_BY_AMOUNT":
      return { value: state.value + payload };
    case "RESET":
      return initState;
    default:
      return state;
  }
}

