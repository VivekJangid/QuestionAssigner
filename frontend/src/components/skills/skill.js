import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get_Allskills } from "../../actions/skill";
import Newskill from "./newskill";

class Skill extends Component {
  static propTypes = {
    skills: PropTypes.array.isRequired,
    get_Allskills: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.get_Allskills();
  }

  render() {
    return (
      <div className="">
        <Fragment>
          <div className="">
            <p>Select Skills</p>
          </div>

          <ol className="list-inline row">
            {this.props.skills.map(sk => (
              <li key={sk.id} className="col-xs-12 col-sm-6 col-md-4">
                <span className="btn btn-rounded btn-sm not-link">
                  {sk.skill}
                </span>
              </li>
            ))}
          </ol>

          <Newskill />
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
  { get_Allskills }
)(Skill);
