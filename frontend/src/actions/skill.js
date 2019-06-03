import { GET_ALLSKILLS, NEW_SKILL } from "./types";
import axios from "axios";

export const get_Allskills = () => dispatch => {
  axios
    .get("http://localhost:8000/api/skills/")
    .then(res => {
      dispatch({
        type: GET_ALLSKILLS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const newSkill = skill => dispatch => {
  axios
    .post("http://localhost:8000/api/skills/", skill)
    .then(res => {
      dispatch({
        type: NEW_SKILL,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
