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
import showAchievementMessage from "../actions/showAchievementMessage";
import hideAchievementMessage from "../actions/hideAchievementMessage";
import { delay } from "redux-saga";

export function *updateLeaderboards(getState) {
    const { teams, achievements } = yield call(fetchData, config.serviceUrl, "update");
    const { teams: prevTeams, achievements: prevAchievements } = getState();
    const achievementMessages = new Set();
    prevTeams.forEach(prevTeam => {
        const key = prevTeam.slackChannel;
        const update = teams[key];
        const diff = update.achievements.filter(codeName => prevTeam.achievements.indexOf(codeName) === -1);
        if (diff.length) {
            console.log(
                `team ${key} new achievement${diff.length > 1 ? "s" : ""}: ${diff.join(", ")}`
            );
            diff.forEach(newAchievement => {
                achievementMessages.add({
                    team: prevTeam,
                    achievement: prevAchievements.find(
                        prevAchievement => prevAchievement.codeName === newAchievement
                    )
                });
            });
        }
    });
    if (!achievementMessages.size) {
        // no changes, no update neccessary
        console.log("[PH_LOG] no new achievements"); // PH_TODO: REMOVE
        return;
    }
    console.log("[PH_LOG] achievementMessages: ", achievementMessages.size); // PH_TODO: REMOVE
    for (const { team, achievement } of achievementMessages) {
        yield put(showAchievementMessage(team, achievement));
        yield call(delay, config.messageDuration);
        yield put(hideAchievementMessage());
        yield call(delay, 500);
    }
    yield put(updateTeams(teams));
    yield put(updateAchievements(achievements));
}

export default function *(getState) {
    yield* takeLatest("FETCH_SCORES", updateLeaderboards, getState);
}
