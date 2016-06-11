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

export function *updateLeaderboards(getState) {
    const { teams, achievements } = yield call(fetchData, config.serviceUrl, "update");
    const { teams: prevTeams } = getState();
    prevTeams.forEach(prevTeam => {
        const key = prevTeam.slackChannel;
        const update = teams[key];
        const diff = update.achievements.filter(codeName => prevTeam.achievements.indexOf(codeName) === -1);
        if (diff.length) {
            console.log(
                `team ${key} new achievement${diff.length > 1 ? "s" : ""}: ${diff.join(", ")}`
            );
        }
        if (prevTeam.score < update.score) {
            console.log(`team ${key} new score: ${update.score}`)
        }
    });
    yield put(updateTeams(teams));
    yield put(updateAchievements(achievements));
}

export default function *(getState) {
    yield* takeLatest("FETCH_SCORES", updateLeaderboards, getState);
}
