import { useState } from "react";
import { useEvents } from "../context/EventsContext";

export default function NewEventForm({ closeForm }) {
  const { addEvent } = useEvents();
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
    addEvent(formState);
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
