import React from "react";
import "./Filtering.css";

/**
 * Creates a dropdown to filter the page by continent when selected. 
 * @returns a continent dropdown
 */
function ContinentDropdown({ continents, handleSelect, isReset }) {
  const handleChange = (e) => {
    const selectedContinent = e.target.value;
    handleSelect(selectedContinent);
  };
  
  return (
    <div>
      <select onChange={handleChange} value={isReset ? "" : undefined}>
        <option value="">All Continents</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ContinentDropdown;
