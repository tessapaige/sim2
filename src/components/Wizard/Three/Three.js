import React, { Component } from "react";

export default class Three extends Component {
  constructor() {
    super();

    this.state = {
      monthly: "",
      desired: ""
    };
  }

  handleMonthly(val) {
    this.setState({ monthly: val });
  }

  handleDesired(val) {
    this.setState({ desired: val });
  }

  render() {
    return (
      <div>
        <input onClick={e => this.handleMonthly(e.target.value)} type="text" />

        <input onClick={e => this.handleDesired(e.target.value)} type="text" />
      </div>
    );
  }
}
