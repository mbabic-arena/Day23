import React, { Component } from "react";

class Plant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Flowering plant",
    };
  }
  render() {
    return (
      <div>
        <h2>Plant type is {this.state.type}</h2>
      </div>
    );
  }
}

export default Plant;
