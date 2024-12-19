import { combineReducers } from "redux";
import countReducer from "./countReducer";
import themeReducer from "./themeReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  count: countReducer,
  theme: themeReducer,
  todos: todosReducer,
});

export default rootReducer;
