import {
  NEW_ASSIGNMENT,
  GET_ALLASSIGNMENTS,
  GET_ASSIGNMENT
} from "../actions/types";

const initialState = {
  assignments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_ASSIGNMENT:
      return {
        ...state,
        assignments: [...state.assignments, action.payload]
      };
    case GET_ALLASSIGNMENTS:
      return {
        ...state,
        assignments: action.payload
      };

    case GET_ASSIGNMENT:
      return {
        ...state,
        assignments: state.assignments.filter(
          assignment => assignment.id == action.payload
        )
      };
    default:
      return state;
  }
}
