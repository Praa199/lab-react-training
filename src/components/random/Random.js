import React from 'react';
import './Random.css';

function Random(props) {
  let random;
  let min = props.min;
  let max = props.max;
  random = Math.floor(Math.random() * max) + min;

  return (
    <div className="random-container">
      <p>
        Random value between {props.min} and {props.max} => {random}
      </p>
    </div>
  );
}

export default Random;
