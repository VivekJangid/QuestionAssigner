import { GET_ALLSKILLS, NEW_SKILL, DELETE_SKILL } from "../actions/types";

const initialState = {
  skills: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.payload]
      };
    case GET_ALLSKILLS:
      return {
        ...state,
        skills: action.payload
      };
    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.payload)
      };
    default:
      return state;
  }
}
