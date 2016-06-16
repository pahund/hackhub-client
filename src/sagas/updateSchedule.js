/**
 * updateSchedule.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Jun 2016
 */
import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import config from "../config";
import fetchData from "../util/fetchData";
import { delay } from "redux-saga";
import updateScheduleAction from "../actions/updateSchedule";

function *updateSchedule() {
    const scheduleItems = yield call(fetchData, config.serviceUrl, "schedule");
    yield put(updateScheduleAction(scheduleItems));
}

export default function *() {
    yield* takeLatest("FETCH_SCHEDULE", updateSchedule);
}
