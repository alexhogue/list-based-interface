import React from "react";
import { useEffect, useState } from "react";
import "./Filtering.css";

function ActivityDropdown({ activities, handleSelect, isReset }) {
  const [selectedActivity, setSelectedActivity] = useState("");


  useEffect(() => {
    if (isReset) {
      setSelectedActivity(""); 
    }
  }, [isReset]);
  
  const handleChange = (e) => {
    const selectedActivity = e.target.value;
    handleSelect(selectedActivity);
    setSelectedActivity(selectedActivity);
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
