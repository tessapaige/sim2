import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import One from "./One/One";
import Two from "./Two/Two";
import Three from "./Three/Three";

export default class Wizard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Add New Listing</h2>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
