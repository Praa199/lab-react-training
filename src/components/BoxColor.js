import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const color = `rgb(${r},${g},${b})`;

  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
    <div
      className="box-color-container"
      style={{
        backgroundColor: color,
        color: 'white',
        border: '1px solid black',
        margin: '1rem',
        padding: '1rem',
      }}
    >
      <p>{color}</p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}

export default BoxColor;

// let hexColor;

// function rgbToHex(r, g, b) {
//   hexColor =
//     '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   return hexColor;
// }
// rgbToHex(props.r, props.g, props.b);

// return (
//   <div
//     className="box-color-container"
//     style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
//   >
//     <p>
//       rgb({props.r}, {props.g}, {props.b})
//     </p>
//     <p>{hexColor}</p>
//   </div>
// );
