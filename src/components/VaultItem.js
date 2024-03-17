import React from "react";
import x from "../assets/xButton.png";
import "./VaultItem.css";

function VaultItem({ item, name, index, removeFromVault }) {
  return (
    <div className="vaultItemContainer">
      <div className="vaultItem">
        <div id="savedText">
          <h3 key={index}>
            <b>{name}</b>
          </h3>
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