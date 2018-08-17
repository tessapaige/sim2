import React, { Component } from "react";

export default class One extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.reset = this.reset.bind(this);
  }

  handleName(val) {
    this.setState({ name: val });
  }

  handleAddress(val) {
    this.setState({ address: val });
  }

  handleCity(val) {
    this.setState({ city: val });
  }

  handleState(val) {
    this.setState({ state: val });
  }

  handleZipcode(val) {
    this.setState({ zipcode: val });
  }

  reset() {
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    });
  }

  render() {
    return (
      <div>
        <p>Name</p>
        <input
          onChange={e => this.handleName(e.target.value)}
          type="text"
          value={this.state.name}
        />

        <p>Address</p>
        <input
          onChange={e => this.handleAddress(e.target.value)}
          type="text"
          value={this.state.address}
        />

        <p>City</p>
        <input
          onChange={e => this.handleCity(e.target.value)}
          type="text"
          value={this.state.city}
        />

        <p>State</p>
        <input
          onChange={e => this.handleState(e.target.value)}
          type="text"
          value={this.state.state}
        />

        <p>Zipcode</p>
        <input
          onChange={e => this.handleZipcode(e.target.value)}
          type="text"
          value={this.state.zipcode}
        />
      </div>
    );
  }
}
