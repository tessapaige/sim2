import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get("/api/house").then(res => {
      this.setState({ list: res.data });
      console.log(res)
    });
  }

  // getHouses() {
  //   axios.get("api/house").then(res => {
  //     this.setState({ list: res.data });
  //   });
  // }

  render() {
    let listToDisplay = this.state.list.map((element, i) => {
      <House list={element} key={element.id} />;
    });
    console.log(listToDisplay)
    return (
      <div>
        {listToDisplay}
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}
