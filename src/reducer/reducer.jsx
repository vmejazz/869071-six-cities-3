import {combineReducers} from "redux";
import {reducer as data} from "./data/data.jsx";
import {reducer as user} from "./user/user.jsx";
import NameSpace from "./name-space.jsx";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
