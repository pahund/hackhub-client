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

function Achievements({ achievements, teams }) {
    const achievementsWithTeamNames = achievements.map(achievement => {
        return {
            ...achievement,
            teams: achievement.teams.map(slackChannel => teams.find(team => team.slackChannel === slackChannel))
        }
    });
    const sortedAchievements = achievementsWithTeamNames.sort(({ name: name1, score: score1 }, { name: name2, score: score2 }) => {
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
    const secondaryAchievements = sortedAchievements.filter(({ singleton }) => !singleton);
    return (
        <MainBox>
            <h1>Achievements</h1>
            <h2>Gold, Silver and Bronze – each is awarded to one team only:</h2>
            {primaryAchievements.map(({ name, codeName, description, score, available, teams }) => (
                <Achievement key={`achievement-${codeName}`}
                             name={name}
                             score={score}
                             description={description}
                             available={available}
                             teams={teams} />
            ))}
            <h2>Bonus Achievements – can be awarded to multiple teams:</h2>
            {secondaryAchievements.map(({ name, codeName, description, score, available, teams }) => (
                <Achievement key={`achievement-${codeName}`}
                             name={name}
                             score={score}
                             description={description}
                             available={available}
                             teams={teams} />
            ))}
        </MainBox>
    );
}

export default connect(
    state => ({
        achievements: state.achievements,
        teams: state.teams
    })
)(Achievements);
