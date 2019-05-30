import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get_Allassignments } from "../../actions/assignment";

class Assignment extends Component {
  static propTypes = {
    assignments: PropTypes.array.isRequired,
    get_Allassignments: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.get_Allassignments();
  }

  render() {
    return (
      <div className="container">
        <Fragment>
          <h2>Assignments</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Skills Required</th>
                <th>Level Required</th>
                <th>Assigned</th>
                <th>Completed</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {this.props.assignments.map(assignment => (
                <tr key={assignment.id}>
                  <td>{assignment.question}</td>
                  <td>{assignment.skills_required}</td>
                  <td>{assignment.level_required}</td>
                  <td>{assignment.is_assignmed}</td>
                  <td>{assignment.completed}</td>
                  <td>{assignment.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
        <button type="button" className="btn btn-sm btn-light m-auto ">
          Add Assignment
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assignments: state.assignment.assignments
});

export default connect(
  mapStateToProps,
  { get_Allassignments }
)(Assignment);
