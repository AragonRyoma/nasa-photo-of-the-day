import React, { useState } from "react";

function SearchBar(props) {
  const [date, setDate] = useState("");

  const handleChange = (e) => setDate(e.target.value);
  return (
    <>
      <h1>Nasa API Project</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setDateHandler(date);
        }}
      >
        <input placeholder="YYYY-MM-DD" onChange={handleChange} value={date} />
      </form>
      <p>Date must be between Jun 16, 1995 and todays date.</p>
    </>
  );
}

export default SearchBar;
