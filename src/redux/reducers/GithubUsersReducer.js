import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_DETAIL,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_FAILURE,
  GET_USER_REPO,
  GET_USER_REPO_SUCCESS,
  GET_USER_REPO_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  userSelected: null,
  repo: null,
  loading: false
};

export default function GithubUsers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
        return { ...state, loading: true };

    case GET_USERS_SUCCESS:
        return {
            ...state,
            users: action.payload,
            loading: false
        };

    case GET_USERS_FAILURE:
        return {
            ...state,
            loading: false,
            users: []
        };

    case GET_USER_DETAIL:
        return { ...state, loading: true, userSelected: null };

    case GET_USER_DETAIL_SUCCESS:
        return {
            ...state,
            userSelected: action.payload,
            loading: false
        };

    case GET_USER_DETAIL_FAILURE:
        return {
            ...state,
            loading: false,
            userSelected: null
        };

    case GET_USER_REPO:
        return { ...state, loading: true, repo: null };

    case GET_USER_REPO_SUCCESS:
        return {
            ...state,
            repo: action.payload,
            loading: false
        };

    case GET_USER_REPO_FAILURE:
        return {
            ...state,
            loading: false,
            repo: null
        };

    default:
        return state;
}
}
