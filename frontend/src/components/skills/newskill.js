import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { newSkill } from "../../actions/skill";
import { Link } from "react-router-dom";

export class Newskill extends Component {
  state = {
    skill: ""
  };

  static propTypes = {
    newSkill: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit1 = e => {
    e.preventDefault();
    const { skill } = this.state;
    const skills = { skill };
    this.props.newSkill(skills);
  };

  render() {
    return (
      <div className="form-inline bg-secondary w-90 p-1 m-3">
        <div className="form-group w-75 px-2">
          <label className="m-3 px-2">Add New Skill</label>
          <input
            type="text"
            className="form-control text-center"
            placeholder="Add Skill"
            name="skill"
            onChange={this.onChange}
            value={this.state.skill}
          />
        </div>
        <span className="input-group-btn float-center">
          <span
            onClick={this.onSubmit1}
            className="btn btn-primary submit visible-sm visible-md visible-lg"
          >
            Add Skill
          </span>
          <span className="btn btn-light submit visible-sm visible-md visible-lg">
            <Link to="/deleteskill">Delete Skill</Link>
          </span>
        </span>
      </div>
    );
  }
}

export default connect(
  null,
  { newSkill }
)(Newskill);
