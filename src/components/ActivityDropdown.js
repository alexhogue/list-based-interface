import React from "react";
import "./Filtering.css";

function ActivityDropdown({ activities, handleSelect }) {
  const handleChange = (e) => {
    const selectedActivity = e.target.value;
    handleSelect(selectedActivity);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">All Activities</option>
        {activities.map((classification) => (
          <option key={classification} value={classification}>
            {classification}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ActivityDropdown;
