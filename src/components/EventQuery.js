import React, { useRef } from "react";

const EventQuery = ({ lastDays, getLastDaysData, setDays }) => {
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const lastDays = inputRef.current.value;
    setDays(lastDays);
    getLastDaysData(lastDays);
  };
  return (
    <form
      className="container h-12 py-5 text-center flex align-items-center justify-content-center"
      onSubmit={submitHandler}
    >
      <span className="mr-1">Showing events happened in last </span>
      <input
        type="number"
        placeholder={lastDays}
        className="border rounded-md focus:outline-0 mx-2 w-12 pl-1"
        ref={inputRef}
      />
      <span className="mr-1"> days</span>
      <button type="submit" className="btn btn-sm btn-primary ml-3">
        Query
      </button>
    </form>
  );
};

export default EventQuery;
