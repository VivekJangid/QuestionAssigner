import {
  NEW_ASSIGNMENT,
  GET_ALLASSIGNMENTS,
  GET_ASSIGNMENT
} from "../actions/types";
import axios from "axios";

export const newAssignment = assignment => dispatch => {
  axios
    .post("http://localhost:8000/api/assignments/", assignment)
    .then(res => {
      dispatch({
        type: NEW_ASSIGNMENT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const get_Allassignments = () => dispatch => {
  axios
    .get("http://localhost:8000/api/assignments/")
    .then(res => {
      dispatch({
        type: GET_ALLASSIGNMENTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const get_Assignment = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/assignments/${id}`)
    .then(res => {
      dispatch({
        type: GET_ASSIGNMENT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
