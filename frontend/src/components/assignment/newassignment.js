import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { newAssignment } from "../../actions/assignment";
import { Link } from "react-router-dom";
import Skill from "../skills/skill";

export class NewAssignment extends Component {
  state = {
    question: "",
    skills: "",
    level_required: ""
  };

  static propTypes = {
    newAssignment: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log("hello");
    const { question, skills, level_required } = this.state;
    const skills_required = skills.split(",");
    const assignment = { question, skills_required, level_required };

    this.props.newAssignment(assignment);
  };

  render() {
    return (
      <div className="container card border-light card-body mt-5 mb-5  ">
        <div className="card-header">
          <h3>Add Assignments</h3>
        </div>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Question</label>
            <input
              type="text"
              className="form-control"
              name="question"
              onChange={this.onChange}
              value={this.state.question}
            />
          </div>

          <div className="form-group">
            <label>Skills_required</label>
            <input
              type="text"
              className="form-control"
              name="skills"
              onChange={this.onChange}
              value={this.state.skills}
            />
            <Skill />
          </div>

          <div className="form-group">
            <label>Level_required</label>
            <input
              type="number"
              className="form-control"
              name="level_required"
              onChange={this.onChange}
              value={this.state.level_required}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
          <span className="float-right btn btn-light">
            <Link to="/">View Assignments</Link>
          </span>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { newAssignment }
)(NewAssignment);
