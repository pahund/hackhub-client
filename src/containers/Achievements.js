/**
 * Achievements.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 08 Jun 2016
 */
import React from "react";
import MainBox from "../components/MainBox";
import Achievement from "../components/Achievement";
import { connect } from "react-redux";

function Achievements({ achievements }) {
    const sortedAchievements = achievements.sort(({ name: name1, score: score1 }, { name: name2, score: score2 }) => {
        if (score1 < score2) {
            return 1;
        }
        if (score1 > score2) {
            return -1;
        }
        const normalized = {
            name1: name1.toLocaleLowerCase(),
            name2: name2.toLocaleLowerCase()
        };
        if (normalized.name1 > normalized.name2) {
            return 1;
        }
        if (normalized.name1 < normalized.name2) {
            return -1;
        }
        return 0;
    });
    const primaryAchievements = sortedAchievements.filter(({ singleton }) => singleton);
    const secondaryAchievemnts = sortedAchievements.filter(({ singleton }) => !singleton);
    return (
        <MainBox>
            <h1>Achievements</h1>
            <h2>Gold, Silver and Bronze – each is awarded to one team only:</h2>
            {primaryAchievements.map(({ name, codeName, description, score }) => (
                <Achievement key={`achievement-${codeName}`}
                             name={name}
                             score={score}
                             description={description} />
            ))}
            <h2>Bonus Achievements – can be awarded to multiple teams:</h2>
            {secondaryAchievemnts.map(({ name, codeName, description, score }) => (
                <Achievement key={`achievement-${codeName}`}
                             name={name}
                             score={score}
                             description={description} />
            ))}
        </MainBox>
    );
}

export default connect(
    state => ({
        achievements: state.achievements
    })
)(Achievements);
