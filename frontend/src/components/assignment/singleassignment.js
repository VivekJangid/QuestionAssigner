import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class SingleAssignment extends Component {
  static propTypes = {
    assignments: PropTypes.array
  };

  state = {
    assignment: {}
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    let assignment = this.props.assignments.filter(assign => assign.id == id);
    if (assignment.length > 0) {
      this.setState({ assignment: assignment[0] });
    }
  }

  render() {
    // console.log(this.state);
    const {
      id,
      question,
      skills_required,
      level_required,
      is_assigned,
      completed,
      created_at
    } = this.state.assignment;

    return (
      <div className="container">
        <Fragment>
          <h2>Assignment</h2>
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
              <tr key={id}>
                <td>{question}</td>
                <td>{skills_required}</td>
                <td>{level_required}</td>
                <td>{is_assigned ? <p>true</p> : <p>false</p>}</td>
                <td>{completed ? <p>true</p> : <p>false</p>}</td>
                <td>{created_at}</td>
              </tr>
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assignments: state.assignment.assignments
});

export default connect(mapStateToProps)(SingleAssignment);
