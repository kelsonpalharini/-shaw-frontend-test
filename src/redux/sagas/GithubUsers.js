import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { toast } from 'react-toastify';

import api from "../../services/api";

import {
    GET_USERS, GET_USER_DETAIL, GET_USER_REPO
} from "../actions/types";

import {
    getUsersSuccess, getUsersFailure,
    getUserDetailSuccess, getUserDetailFailure,
    getUserRepoSuccess, getUserRepoFailure
} from "../actions";


export function* getUsers() {
  yield takeEvery(GET_USERS, getUsersFromServer);
}

export function* getUserDetail() {
  yield takeEvery(GET_USER_DETAIL, getUserDetailFromServer);
}

export function* getUserRepo() {
  yield takeEvery(GET_USER_REPO, getUserRepoFromServer);
}

/*************************************************************/

function* getUsersFromServer({ payload }) {
  const { since } = payload;

  try {
    const  response = yield call(getUsersRequest, since);

    if (response) {
        if(response.data.error){
          toast.error('😔 ' + response.data.error.message);
          yield put(getUsersFailure("Cant execute!"));
        } else {
            toast.success('😃 Users Successfully!');
            yield put(getUsersSuccess(response));
        }
    } else {
        toast.error('😔 Cant execute!');
        yield put(getUsersFailure("Cant execute!"));
    }
  } catch (error) {
      toast.error('😔 Cant execute!');
      yield put(getUsersFailure(error));
  }
}

const getUsersRequest = async (since) =>
  await api
      .get("users" + (since ? `?since=${since}` : ""))
      .then(response => response)
      .catch(error => error);

/***************************************************************/

function* getUserDetailFromServer({ payload }) {
  const { userName } = payload;

  try {
    const  response = yield call(getUserDetailRequest, userName);

    if(response.data.error){
      toast.error('😔 ' + response.data.error.message);
      yield put(getUserDetailFailure("Cant execute!"));
    } else {
        toast.success('😃 Details Successfully!');
        yield put(getUserDetailSuccess(response));
    }

  } catch (error) {
      toast.error('😔 Cant execute!');
      yield put(getUserDetailFailure(error));
  }
}

const getUserDetailRequest = async (userName) =>
  await api
      .get(`users/${userName}/details`)
      .then(response => response)
      .catch(error => error);

/***************************************************************/

function* getUserRepoFromServer({ payload }) {
  const { userName } = payload;

  try {
    const  response = yield call(getUserRepoRequest, userName);

    if(response.data.error){
      toast.error('😔 ' + response.data.error.message);
      yield put(getUserRepoFailure("Cant execute!"));
    } else {
        toast.success('😃 Repositories Successfully!');
        yield put(getUserRepoSuccess(response));
    }
  } catch (error) {
      toast.error('😔 Cant execute!');
      yield put(getUserRepoFailure(error));
  }
}

const getUserRepoRequest = async (userName) =>
  await api
      .get(`users/${userName}/repos`)
      .then(response => response)
      .catch(error => error);

/***************************************************************/

export default function* rootSaga() {
  yield all([
    fork(getUsers),
    fork(getUserDetail),
    fork(getUserRepo)

  ]);
}
