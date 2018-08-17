import React, { Component } from "react";

export default class Two extends Component {
  constructor() {
    super();

    this.state = {
      img: ""
    };
  }

  handleImg(val) {
    this.setState({ img: val });
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.state.handleImg(e.target.value)}
          type="text"
          value={this.state.img}
        />
      </div>
    );
  }
}
