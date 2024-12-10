import React, { useState } from "react";

export default function Inputs() {
  // controlled component
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* two way data binding */}
      {/* controlled component */}
      <div>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div>
        <label>
          I have read
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </label>
      </div>
      {/* whenever you click a button that does not have "type='button'", the form will make page refresh */}
      <button type="submit" disabled={!checked}>
        Submit
      </button>
    </form>
  );
}
