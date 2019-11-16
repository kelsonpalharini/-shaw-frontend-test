import { all } from "redux-saga/effects";

import GithubUsersSagas from "./GithubUsers";


export default function* rootSaga(getState) {
    yield all([
      GithubUsersSagas(),
    ]);
}
