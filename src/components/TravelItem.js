import React from "react";
import { useState } from "react";
import Heart from "../assets/Heart.png";
import HeartFilled from "../assets/heart-filled.png";
import Comment from "../assets/Comment.png";
import './TravelItem.css';

function TravelItem({ item, addToVault }) {
  const [isLiked, setIsLiked] = useState(false);

  const likeHander = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="ItemContainer">
      <div className="TravelItem">
        <div id="tripText">
          <h3>
            <b>{item.name}</b>
          </h3>
          <p>{item.continent}</p>
          <p id="description">{item.description}</p>
        </div>
        <div id="buttonSection">
          <button
            id="vaultButton"
            onClick={(e) => {
              addToVault(item.name);
            }}
          >
            Add to Vault
          </button>
          <div id="socialSection">
            <img
              id="heart"
              alt="like button"
              onClick={likeHander}
              src={isLiked ? HeartFilled : Heart}
            />
            <p className="socialData">{item.likes}</p>
            <img id="comment" alt="comment button" src={Comment} />
            <p className="socialData">{item.comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelItem;
