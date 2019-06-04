import React, { Component } from "react";

export class SingleSkill extends Component {
  state = {
    active: false
  };

  buttonclass() {
    let style = "btn btn-rounded btn-sm not-link btn-";
    style += this.state.active === true ? "success" : "primary";
    return style;
  }

  se = e => {
    if (this.state.active === false) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };

  render() {
    return (
      <span onClick={e => this.se()} className={this.buttonclass()}>
        {this.props.children}
      </span>
    );
  }
}

export default SingleSkill;
