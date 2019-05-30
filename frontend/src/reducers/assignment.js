import {
  NEW_ASSIGNMENT,
  GET_ALLASSIGNMENTS,
  GET_ASSIGNMENT,
  MARK_ASSIGNED,
  MARK_COMPLETED
} from "../actions/types";

const initialState = {
  assignments: [],
  assigned: false,
  completed: false
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
    case MARK_ASSIGNED:
      return {
        ...state,
        ...action.payload,
        assigned: true
      };

    case MARK_COMPLETED:
      return {
        ...state,
        ...action.payload,
        assigned: true,
        completed: true
      };
    default:
      return state;
  }
}
