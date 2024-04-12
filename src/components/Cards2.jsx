import React from "react";
import ReactDOM from "react-dom";
import "./Cards2.css";

function Cards2(props) {
    return (
    <div className={`card ${props.url} `}>
        <div className="card-content h-full">
          <h2 className="card-title text-3xl">{props.heading}</h2>
          <p className="card-body text-lg">
          {props.body}
          </p>
          <a href="#" className="button">
                Learn More
          </a>
        </div>
    </div>
    )
 
};

export default Cards2
