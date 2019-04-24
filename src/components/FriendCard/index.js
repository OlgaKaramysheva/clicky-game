import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.clicked)}>
      <div className="img-container">
        <img alt="" src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
