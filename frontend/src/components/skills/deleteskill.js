import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { get_Allskills, deleteSkill } from "../../actions/skill";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class DeleteSkill extends Component {
  static propTypes = {
    skills: PropTypes.array.isRequired,
    get_Allskills: PropTypes.func.isRequired,
    deleteSkill: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.get_Allskills();
  }

  render() {
    return (
      <div className="container card border-light card-body mt-5 mb-5  ">
        <Fragment>
          <div className="card-header">
            <h3> Skills</h3>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Skill</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.skills.map(sk => (
                <tr key={sk.id}>
                  <td>{sk.skill}</td>
                  <td>
                    <button
                      onClick={this.props.deleteSkill.bind(this, sk.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <span className="float-right btn btn-light">
            <Link to="/newassignment">Add Assignments</Link>
          </span>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skill.skills
});

export default connect(
  mapStateToProps,
  { get_Allskills, deleteSkill }
)(DeleteSkill);
