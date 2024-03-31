import React, { useEffect } from "react";
import { useState } from "react";
import Heart from "../assets/Heart.png";
import HeartFilled from "../assets/heart-filled.png";
import Comment from "../assets/Comment.png";
import './TravelItem.css';

function TravelItem({ item, addToVault, removeFromVault, isReset, inVault }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const buttonText = isAdded ? "Remove" : "Add to Vault";

  useEffect(() => {
    if (isReset) {
      setIsAdded(false);
    }
  }, [isReset])

  useEffect(() => {
    if (!inVault) {
      setIsAdded(false);
    }
  }, [inVault]);

  const likeHander = () => {
    setIsLiked(!isLiked)
  }

  const addHandler = () => {
    if (!isAdded) {
      addToVault(item.name);
      setIsAdded(true);
    } else {
      removeFromVault(item.name);
      setIsAdded(false);
    }
  };

  return (
    <div className="ItemContainer">
      <div className="TravelItem">
        <div id="tripText">
          <h3>
            <b>{item.name}</b>
          </h3>
          <img id="destinationIll" alt={item.name} src={item.image} />
          <p>{item.continent}</p>
          <p id="description">{item.description}</p>
        </div>
        <div id="buttonSection">
          <button
            id="vaultButton"
            onClick={(e) => {
              addHandler();
            }}
          >
            {buttonText}
          </button>
          <div id="socialSection">
            <img
              id="heart"
              alt="like button"
              onClick={likeHander}
              className={isLiked ? "fadeanime" : "fadeOut"}
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
