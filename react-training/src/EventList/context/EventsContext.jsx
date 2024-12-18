import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import eventsAPI from "../mockAPI/eventsAPI";

const EventsContext = createContext();

const eventsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_EVENTS":
      return payload;
    case "ADD_EVENT":
      return [...state, payload];
    case "DELETE_EVENT":
      return state.filter((event) => event.id !== id);
    case "EDIT_EVENT":
      const { id, newEvent } = payload;
      return state.map((event) => {
        return event.id === id
          ? {
              id,
              ...newEvent,
            }
          : event;
      });
  }
};

export function EventsProvider({ children }) {
  const [events, dispatch] = useReducer(eventsReducer, []);

  // useEffect's first argument is a callback function, it cannot be async
  useEffect(() => {
    // we can create async functions inside useEffect's callback
    (async () => {
      const events = await eventsAPI.getEvents();
      dispatch({ type: "SET_EVENTS", payload: events });
    })();
  }, []);

  const addEvent = async (event) => {
    const newEvent = await eventsAPI.addEvent(event);
    dispatch({ type: "ADD_EVENT", payload: newEvent });
  };

  const deleteEvent = (id) => {
    dispatch({ type: "DELETE_EVENT", payload: id });
  };

  const editEvent = (id, newEvent) => {
    dispatch({ type: "EDIT_EVENT", payload: { id, newEvent } });
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        addEvent,
        deleteEvent,
        editEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  return useContext(EventsContext);
}
