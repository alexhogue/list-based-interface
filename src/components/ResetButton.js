import React from "react";
import "./Filtering.css";

/**
 * Creates a reset button that will reset the item grid to its default layout when clicked;
 * takes in a reset function in App to reset the page
 * @returns a reset button
 */
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