import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get_Allskills } from "../../actions/skill";
import Newskill from "./newskill";
import SingleSkill from "./singleskill";

class Skill extends Component {
  static propTypes = {
    skills: PropTypes.array.isRequired,
    get_Allskills: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.get_Allskills();
  }

  isSelected = id => {
    var sel = this.props.skills_required;
    if (sel.includes(id)) {
      var index = sel.indexOf(id);
      sel.splice(index, 1);
    } else {
      sel.push(id);
    }
  };

  render() {
    return (
      <div className="">
        <Fragment>
          <ol className="list-inline row">
            {this.props.skills.map(sk => (
              <li
                key={sk.id}
                className="col-xs-12 center-block col-sm-3 col-md-2 m-2"
                onClick={() => this.isSelected(sk.id)}
              >
                <SingleSkill>{sk.skill}</SingleSkill>
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
