import React from "react";
import './TravelItem.css';

function TravelItem({ item, addToVault }) {
  return (
    <div className="ItemContainer">
      <div className="TravelItem">
        <div id="tripText">
          <h3>
            <b>{item.name}</b>
          </h3>
          <p>{item.continent}</p>
          <p>{item.description}</p>
        </div>
        <button
          id="vaultButton"
          onClick={(e) => {
            addToVault(item.name);
          }}
        >
          Add to Vault
        </button>
      </div>
    </div>
  );
}

export default TravelItem;
