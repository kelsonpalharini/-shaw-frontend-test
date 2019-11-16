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
} from "./types";

export const getUsers = (since, userName) => ({
  type: GET_USERS,
  payload: { since }
});

export const getUsersSuccess = response => ({
  type: GET_USERS_SUCCESS,
  payload: response.data
});

export const getUsersFailure = error => ({
  type: GET_USERS_FAILURE,
  payload: error
});

export const getUserDetail = userName => ({
  type: GET_USER_DETAIL,
  payload: { userName }
});

export const getUserDetailSuccess = response => ({
  type: GET_USER_DETAIL_SUCCESS,
  payload: response.data
});

export const getUserDetailFailure = error => ({
  type: GET_USER_DETAIL_FAILURE,
  payload: error
});

export const getUserRepo = userName => ({
  type: GET_USER_REPO,
  payload: { userName }
});

export const getUserRepoSuccess = response => ({
  type: GET_USER_REPO_SUCCESS,
  payload: response.data
});

export const getUserRepoFailure = error => ({
  type: GET_USER_REPO_FAILURE,
  payload: error
});
