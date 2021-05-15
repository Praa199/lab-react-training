import React, { Component } from 'react';

export class ClickablePicture extends Component {
  state = {
    isClicked: false,
  };

  handleClick = () => {
    this.setState((prevStateValue) => ({
      isClicked: !prevStateValue.isClicked,
    }));
  };

  render() {
    return (
      <img
        onClick={this.handleClick}
        src={this.state.isClicked ? this.props.imgClicked : this.props.img}
        style={{ width: '5rem' }}
      />
    );
  }
}

export default ClickablePicture;
