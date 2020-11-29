import React, { Component } from 'react';


class Heading extends Component {

  render() {
    if(this.props.type === "normal") {
      return (
        <a class={"btn " + this.props.util} href={this.props.href}>
          <span class="main">{this.props.text}</span>
        </a>
      );
    } else if(this.props.type === "blank") {
      return (
        <a class={"btn icon-blank " + this.props.util} target="_blank" href={this.props.href}>
          <span class="main">{this.props.text}</span>
        </a>
      );
    }
  }
}

export default Heading;