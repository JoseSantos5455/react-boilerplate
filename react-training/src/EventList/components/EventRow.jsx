import { useState } from "react";
import { useEvents } from "../context/EventsContext";

export default function EventRow({ event }) {
  const { id, eventName, start, end } = event;

  const { deleteEvent, editEvent } = useEvents();

  const [isEditing, setIsEditing] = useState(false);
  // we are initializing the state with the props
  // this is an anti-pattern, generally should be avoided
  // check this for more details: https://medium.com/@joabi/react-anti-patterns-props-in-initial-state-ad8e1060cd87
  const [formState, setFormState] = useState({
    eventName,
    start,
    end,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSave = () => {
    editEvent(id, formState);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            required
            value={formState.eventName}
            name="eventName"
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            required
            value={formState.start}
            name="start"
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            required
            value={formState.end}
            name="end"
            onChange={handleChange}
          />
        </td>
        <td>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{eventName}</td>
      <td>{start}</td>
      <td>{end}</td>

      <td>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => deleteEvent(id)}>Delete</button>
      </td>
    </tr>
  );
}
