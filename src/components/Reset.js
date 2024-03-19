import React from "react";

function Reset({ handleSelect }) {
  const handleChange = (e) => {
    const resetPage = e.target.value;
    handleSelect(resetPage);
  };

  return (
    <div>
      <button onChange={handleChange} id="resetButton">
        Reset Page
      </button>
    </div>
  );
}

export default Reset;