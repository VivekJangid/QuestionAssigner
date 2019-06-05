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
    const {
      id,
      question,
      skills_required,
      level_required
    } = this.state.assignment;

    return (
      <div className="container float-right border-light float-right-body mt-5 mb-5  ">
        <Fragment>
          <div className="float-right-header">
            <h3> Assignments</h3>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Skill Required</th>
                <th>Level Required</th>
              </tr>
            </thead>
            <tbody>
              <tr key={id}>
                <td>{question}</td>
                <td>{skills_required}</td>
                <td>{level_required}</td>
              </tr>
            </tbody>
          </table>
        </Fragment>
        <div className="container">
          <div className=" float-right">
            <br />
            <hr />
            <form>
              <input type="email" required />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assignments: state.assignment.assignments
});

export default connect(mapStateToProps)(SingleAssignment);
