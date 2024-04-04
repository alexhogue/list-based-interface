import React from "react";
import "./Filtering.css";

/**
 * Creates the sort button, which will sort them items in the item grid according the 
 * the function passed in  
 * @returns a sort button
 */
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
