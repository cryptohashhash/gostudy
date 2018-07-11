import React from "react";

const handleSubmit = (event, onSearch) => {
  event.preventDefault();
  const form = event.target;
  const leadType = form["leadType"].value;
  const startDate = form["startDate"].value;
  const endDate = form["endDate"].value;
  onSearch({ leadType, startDate, endDate });
};

const SearchForm = onSearch => {
  return (
    <form onSubmit={event => handleSubmit(event, onSearch)}>
      <input
        type="text"
        name="leadType"
        placeholder="Lead Type"
        defaultValue="leadDate"
      />
      <input type="text" name="startDate" placeholder="Start Date" />
      <input type="text" name="endDate" palceholder="End Date" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
