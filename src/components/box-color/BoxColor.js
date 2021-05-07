import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  let hexColor;
  function rgbToHex(r, g, b) {
    hexColor =
      '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hexColor;
  }

  return (
    <div
      className="box-color-container"
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;
