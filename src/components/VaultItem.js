import React from "react";
import x from "../assets/xButton.png";
import "./VaultItem.css";

/**
 * Creates a vault item, which is added to the aggregator when a user clicks on an item 
 * in the item grid.
 * @returns a vault item
 */
function VaultItem({ name, index, removeFromVault }) {

  return (
    <div className="vaultItemContainer">
      <div className="vaultItem">
        <div id="savedText">
          <ul>
            <li>
              <h3 key={index}>
                <b>{name}</b>
              </h3>
            </li>
          </ul>
        </div>
        <img
          id="x"
          alt="close button"
          src={x}
          onClick={(e) => {
            removeFromVault(name);
          }}
        />
      </div>
    </div>
  );
}

export default VaultItem;