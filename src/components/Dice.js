import React, { Component } from 'react';

export class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.getRandomValue(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomValue() {
    return 1 + Math.floor(6 * Math.random());
  }

  handleClick() {
    if (this.state.value) {
      this.setState(() => ({
        value: null,
      }));
      setTimeout(() => {
        this.setState(() => ({
          value: this.getRandomValue(),
        }));
      }, 1000);
    }
  }

  render() {
    let srcImg;
    if (this.state.value) {
      srcImg = `/img/dice${this.state.value}.png`;
    } else {
      srcImg = `/img/dice-empty.png`;
    }

    return (
      <img onClick={this.handleClick} src={srcImg} style={{ width: '5rem' }} />
    );
  }
}

export default Dice;
