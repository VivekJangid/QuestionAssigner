import { combineReducers } from "redux";

import assignment from "./assignment";
import auth from "./auth";
import skill from "./skill";

export default combineReducers({
  assignment,
  auth,
  skill
});
