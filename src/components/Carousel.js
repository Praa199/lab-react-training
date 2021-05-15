import React, { Component } from 'react';

export class Carousel extends Component {
  render() {
    return <img src={this.props.imgs} />;
  }
}

export default Carousel;
