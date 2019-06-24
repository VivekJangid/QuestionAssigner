import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get_Allassignments, deleteAssignment } from "../../actions/assignment";
import { Link } from "react-router-dom";
import { sendMail, sendMailmulti } from "../../actions/assignment";
import { get_Allskills } from "../../actions/skill";

class Assignment extends Component {
  state = {
    email: "",
    selected: []
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { email, selected } = this.state;
    if (selected.length == 1) {
      this.props.sendMail(email, selected[0]);
      window.location.reload();
    } else {
      this.props.sendMailmulti(email, selected);
      window.location.reload();
    }
  };

  static propTypes = {
    assignments: PropTypes.array.isRequired,
    get_Allassignments: PropTypes.func.isRequired,
    deleteAssignment: PropTypes.func.isRequired,
    get_Allskills: PropTypes.func.isRequired,
    skills: PropTypes.array.isRequired,
    sendMail: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.get_Allassignments();
    this.props.get_Allskills();
  }

  getskill(skid) {
    let skobj = this.props.skills;
    for (var i = 0; i < skobj.length; i++) {
      if (skobj[i].id == skid) {
        return <li>{skobj[i].skill}</li>;
      }
    }
  }

  isSelected = id => {
    var selected = this.state.selected;
    if (selected.includes(id)) {
      var index = selected.indexOf(id);
      selected.splice(index, 1);
    } else {
      selected.push(id);
    }
  };

  render() {
    return (
      <div className="container card border-light card-body mt-5 mb-5  ">
        <div className="container form-inline  w-90 p-1 m-1">
          <div className=" input-group-btn float-right col-md-6  ">
            <span className="float-right btn btn-light">
              <Link to="/newassignment">Add Assignments</Link>
            </span>
          </div>
          <div className=" input-group-btn float-right col-md-6  ">
            <form onSubmit={this.onSubmit}>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={this.onChange}
                value={this.state.email}
                required
              />
              <button className="btn btn-primary" type="submit">
                Send Mail
              </button>
            </form>
          </div>
        </div>
        <Fragment>
          <div className="card-header p-2">
            <h3> Assignments</h3>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Selected</th>
                <th>Skills Required</th>
                <th>Level Required</th>
                <th>Created At</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.assignments.map(assignment => (
                <tr key={assignment.id}>
                  <td>{assignment.question}</td>
                  <td>
                    <input
                      type="checkbox"
                      onClick={() => this.isSelected(assignment.id)}
                    />
                  </td>
                  <td>
                    {assignment.skills_required.map(sk => (
                      <ol className="list-inline row  m-1 p-1" key={sk}>
                        {this.getskill(sk)}
                      </ol>
                    ))}
                  </td>
                  <td>{assignment.level_required}</td>
                  <td>{assignment.created_at}</td>
                  <td>
                    <Link to={"/a/" + assignment.id}>
                      <button className="btn btn-info btn-sm">View</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={this.props.deleteAssignment.bind(
                        this,
                        assignment.id
                      )}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assignments: state.assignment.assignments,
  skills: state.skill.skills
});

export default connect(
  mapStateToProps,
  {
    get_Allassignments,
    deleteAssignment,
    get_Allskills,
    sendMail,
    sendMailmulti
  }
)(Assignment);
