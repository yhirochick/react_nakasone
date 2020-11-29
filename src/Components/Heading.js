import React, { Component } from 'react';


class Heading extends Component {

  render() {
    if(this.props.level === "2") {
      return (
        <h2 class={"heading2 " + this.props.util}><span>{this.props.text}</span></h2>
      );
    } else if(this.props.level === "3") {
      return (
        <h3 class={"heading3 " + this.props.util}><span>{this.props.text}</span></h3>
      );
    } else if(this.props.level === "4") {
      return (
        <h4 class={"heading4 " + this.props.util}><span>{this.props.text}</span></h4>
      );
    }
  }
}

export default Heading;