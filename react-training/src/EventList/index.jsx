import React, { useEffect, useState } from "react";
import { getEvents } from "./mockAPI/eventsAPI";
import "./EventList.css";
import { genId } from "./util";

export default function EventListApp() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(true);

  // useEffect's first argument is a callback function, it cannot be async
  useEffect(() => {
    // we can create async functions inside useEffect's callback
    (async () => {
      const events = await getEvents();
      setEvents(events);
    })();
  }, []);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const addEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const editEvent = (id, newEvent) => {
    setEvents((prev) =>
      prev.map((event) => {
        // if the event id matches the id we want to edit, return the new event
        // otherwise, return the original event
        return event.id === id
          ? {
              id,
              ...newEvent,
            }
          : event;
      })
    );
  };

  return (
    <div>
      <h1>Event List</h1>
      <button onClick={openForm}>Add New Event</button>
      {showForm && <NewEventForm closeForm={closeForm} addEvent={addEvent} />}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => {
            // key only needs to pass to the top level element
            return (
              <EventRow
                key={event.id}
                event={event}
                deleteEvent={deleteEvent}
                editEvent={editEvent}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function NewEventForm({ closeForm, addEvent }) {
  const [formState, setFormState] = useState({
    eventName: "",
    start: "",
    end: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const { eventName, start, end } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({
      id: genId(),
      ...formState,
    });
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          required
          value={eventName}
          name="eventName"
          onChange={handleChange}
        />
      </div>
      <div>
        <input required value={start} name="start" onChange={handleChange} />
      </div>
      <div>
        <input required value={end} name="end" onChange={handleChange} />
      </div>
      <div>
        <button>Add</button>
        <button type="button" onClick={closeForm}>
          Cancel
        </button>
      </div>
    </form>
  );

  // one way to handle form state
  //   const [name, setName] = useState("");
  //   const [start, setStart] = useState("");
  //   const [end, setEnd] = useState("");
  //   return (
  //     <tr>
  //       <td>
  //         <input value={name} onChange={(e) => setName(e.target.value)} />
  //       </td>
  //       <td>
  //         <input value={start} onChange={(e) => setStart(e.target.value)} />
  //       </td>
  //       <td>
  //         <input value={end} onChange={(e) => setEnd(e.target.value)} />
  //       </td>
  //       <td>
  //         <button>Add</button>
  //         <button>Cancel</button>
  //       </td>
  //     </tr>
  //   );
}

function EventRow({ event, deleteEvent, editEvent }) {
  const { id, eventName, start, end } = event;

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
