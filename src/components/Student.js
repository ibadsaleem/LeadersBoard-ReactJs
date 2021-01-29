import React, { useState } from "react";
import "../App.css";

export default function Student(props) {
  const [score, setScore] = useState(props.score);
  
  let text = "";
  if (score >= 350) {
    text = "Success";
    text = <p className="boxs">{text}</p>;
  }

  return (
    <div className="StudentClass">
      <div className="left">
        <h3 className="Name">
          {props.name}
          <button className="add" onClick={() => setScore(score + 1)}>
            +
          </button>
          {text}
        </h3>
        <p className="University">{props.Uni}</p>
      </div>
      <div className="right">{score}</div>
    </div>
  );
}
