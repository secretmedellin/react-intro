import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleclicks = (event) => {
    this.props.Buttonclicked(event.target.value);
  };
  render() {
    return <div className="buttons"></div>;
  }
}
export default Buttons;
