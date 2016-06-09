/**
 * updateLeaderboards.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import config from "../config";
import fetchData from "../util/fetchData";
import updateTeams from "../actions/updateTeams";
import updateAchievements from "../actions/updateAchievements";

export function *updateLeaderboards() {
    const { teams, achievements } = yield call(fetchData, config.serviceUrl, "update");
    yield put(updateTeams(teams));
    yield put(updateAchievements(achievements));
}

export default function *() {
    yield* takeLatest("FETCH_SCORES", updateLeaderboards);
}
