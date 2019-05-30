import { combineReducers } from "redux";

import assignment from "./assignment";
import auth from "./auth";

export default combineReducers({
  assignment,
  auth
});
