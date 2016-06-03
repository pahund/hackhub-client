/**
 * fetchHackers.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import config from "../config";
import fetchData from "../util/fetchData";
import updateHackers from "../actions/updateHackers";

export function *fetchHackers() {
    const hackers = yield call(fetchData, config.serviceUrl, "hackers");
    yield put(updateHackers(hackers));
}

export default function *() {
    yield* takeLatest("FETCH_HACKERS", fetchHackers);
}
