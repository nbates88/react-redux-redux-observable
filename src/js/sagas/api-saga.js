import {
  API_ERRORED,
  DATA_REQUESTED,
  DATA_LOADED,
  TIME_LOADED,
  TIME_REQUESTED
} from "../constants/action-types";
import { takeEvery, call, put, all } from "redux-saga/effects";

function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* timeWatcherSaga() {
  yield takeEvery(TIME_REQUESTED, getTimeSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
}

function* getTimeSaga() {
  try {
    const payload = yield call(getTime);
    yield put({ type: TIME_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
}

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json()
  );
}

function getTime() {
  return fetch("/api/graphql?query={timestamp{unix,date,time,tzoffset}}")
    .then(response => response.json())
    .then(json => json.data.timestamp);
}

export default function* rootSaga() {
  yield all([watcherSaga(), timeWatcherSaga()]);
}
