import React, { useEffect, useState } from "react";
import eventsAPI from "./mockAPI/eventsAPI";
import "./EventList.css";
import NewEventForm from "./components/NewEventForm";
import EventRow from "./components/EventRow";
import { useEvents } from "./context/EventsContext";

export default function EventListApp() {
  const [showForm, setShowForm] = useState(true);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const { events } = useEvents();

  return (
    <div>
      <h1>Event List</h1>
      <button onClick={openForm}>Add New Event</button>
      {showForm && <NewEventForm closeForm={closeForm} />}
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
            return <EventRow key={event.id} event={event} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
