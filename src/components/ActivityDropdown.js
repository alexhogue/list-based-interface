import React from "react";
import { useEffect, useState } from "react";
import "./Filtering.css";

function ActivityDropdown({ activities, handleSelect, isReset }) {
  const [selectedActivity, setSelectedActivity] = useState("");

  const handleChange = (e) => {
    const selectedActivity = e.target.value;
    handleSelect(selectedActivity);
    setSelectedActivity(selectedActivity);
  };

  useEffect(() => {
    if (isReset) {
      setSelectedActivity(""); 
    }
  }, [isReset]);
  

  return (
    <div>
      <select onChange={handleChange} value={isReset ? "" : undefined}>
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
