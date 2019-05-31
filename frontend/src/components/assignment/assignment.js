import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get_Allassignments } from "../../actions/assignment";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
                  <td>
                    <Link to={"/a/" + assignment.id}>
                      {assignment.question}
                    </Link>
                  </td>

                  <td>{assignment.skills_required}</td>
                  <td>{assignment.level_required}</td>
                  <td>
                    {assignment.is_assignmed ? <p>true</p> : <p>false</p>}
                  </td>
                  <td>{assignment.completed ? <p>true</p> : <p>false</p>}</td>
                  <td>{assignment.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
        <Link to="/newassignment">Add Assignments</Link>
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
