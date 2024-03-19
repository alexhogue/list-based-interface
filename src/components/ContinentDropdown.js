import React from "react";
import "./Filtering.css";

function ContinentDropdown({ continents, handleSelect }) {
  const handleChange = (e) => {
    const selectedContinent = e.target.value;
    handleSelect(selectedContinent);
  };

  return (
    <div>
      <select onChange={handleChange}>
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
