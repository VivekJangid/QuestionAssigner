import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get_Allskills } from "../../actions/skill";

export class SingleAssignment extends Component {
  static propTypes = {
    skills: PropTypes.array.isRequired,
    assignments: PropTypes.array,
    get_Allskills: PropTypes.func.isRequired,
    sendMail: PropTypes.func.isRequired
  };

  state = {
    assignment: {}
  };

  componentWillMount() {
    this.props.get_Allskills();
    const { id } = this.props.match.params;
    let assignment = this.props.assignments.filter(assign => assign.id == id);
    if (assignment.length > 0) {
      this.setState({ assignment: assignment[0] });
    }
  }

  getskill(skid) {
    let skobj = this.props.skills;
    for (var i = 0; i < skobj.length; i++) {
      if (skobj[i].id == skid) {
        return <li>{skobj[i].skill + "  "}</li>;
      }
    }
  }

  render() {
    const {
      id,
      question,
      question_info,
      skills_required,
      level_required
    } = this.state.assignment;

    return (
      <div className="container float-right border-light float-right-body mt-5 mb-5  ">
        <Fragment>
          <div id="AddToPdf" className="mt4">
            <div className="float-right-header">
              <h2 id="question"> {question} </h2>
              <span className="container">
                <h4 id="question_info">{question_info}</h4>
              </span>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Skill Required</th>
                  <th>Level Required</th>
                </tr>
              </thead>
              <tbody>
                <tr key={id} id="question_skills">
                  <td>
                    {skills_required.map(sk => (
                      <ol className="list-inline row m-1 p-1" key={sk}>
                        {this.getskill(sk)}
                      </ol>
                    ))}
                  </td>
                  <td id="question_level">{level_required}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
  { get_Allskills }
)(SingleAssignment);
