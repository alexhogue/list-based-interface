import React from "react";
import "./Filtering.css";

function Reset({ handleSelect }) {
  const handleClick = () => {
    handleSelect();
  };

  return (
    <div>
      <button onClick={handleClick} id="resetButton">
        Reset Page
      </button>
    </div>
  );
}

export default Reset;