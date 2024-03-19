import React from "react";
import "./Filtering.css";

function Sort({ handleSelect }) {
  const handleClick = () => {
    handleSelect();
  };

  return (
    <div>
      <button onClick={handleClick} id="sortButton">
        Most Liked
      </button>
    </div>
  );
}

export default Sort;
