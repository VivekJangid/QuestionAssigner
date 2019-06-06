import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get_Allskills } from "../../actions/skill";

export class SingleAssignment extends Component {
  static propTypes = {
    skills: PropTypes.array.isRequired,
    assignments: PropTypes.array,
    get_Allskills: PropTypes.func.isRequired
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
        return <li>{skobj[i].skill}</li>;
      }
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
            <h2> Assignment : </h2>
            <span className="container">
              <h4>{question}</h4>
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
              <tr key={id}>
                <td>
                  {skills_required.map(sk => (
                    <ol className="list-inline row m-1 p-1" key={sk}>
                      {this.getskill(sk)}
                    </ol>
                  ))}
                </td>
                <td>{level_required}</td>
              </tr>
            </tbody>
          </table>
        </Fragment>
        <div className="container">
          <div className=" float-right">
            <br />
            <hr />
            <form
              action="mailto:intern_vivek@sarvika.com?subject=Complete Assignment"
              method="post"
              encType="text/plain"
            >
              <input type="email" required />
              <button type="submit">Send Mail</button>
            </form>
          </div>
        </div>
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
