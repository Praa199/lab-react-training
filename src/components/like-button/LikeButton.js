import React, { Component, useState } from 'react';

class LikeButton extends Component {
  state = {
    number: 0,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    const { colors, number } = this.state;

    let myStyle = {
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    };

    return (
      <button style={myStyle} onClick={this.handleClick}>
        {number} Like
      </button>
    );
  }
}

export default LikeButton;

// const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
// //   const randomColor = Math.floor(Math.random() * colorArr.length);
// const [count, setCount] = useState(0);

// function randomColor() {
//   let random = colorArr[Math.floor(Math.random() * colorArr.length)];
//   return       style={{
//       backgroundColor: color,
//       color: 'white',
//       border: '1px solid black',
//       margin: '1rem',
//       padding: '1rem',
//     }}
//   console.log(random);
// }

// return (
//   <button
//     onClick={() => {
//       setCount(count + 1);
//       randomColor();
//     }}
//   >
//     {count}Likes
//   </button>
// );
// }
