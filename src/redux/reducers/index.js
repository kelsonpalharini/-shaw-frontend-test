import { combineReducers } from "redux";

import GithubUsersReducer from "./GithubUsersReducer";

const reducers = combineReducers({
  githubUsers: GithubUsersReducer
});

export default reducers;
