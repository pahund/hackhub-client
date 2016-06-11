/**
 * Teams.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import achievementSorter from "../util/achievementSorter";
import Team from "../components/Team";
import MainBox from "../components/MainBox";

function Teams({ teams, achievements }) {
    const teamsWithPopulatedAchievements = teams.map(team => ({
        ...team,
        achievements: team.achievements.map(
            codeName => achievements.find(achievement => achievement.codeName === codeName)
        ).sort(achievementSorter)
    }));
    const sortedTeams = teamsWithPopulatedAchievements.sort(({ score: score1, name: name1 }, { score: score2, name: name2 }) => {
        if (score1 < score2) {
            return 1;
        }
        if (score1 > score2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        if (name1 < name2) {
            return -1;
        }
        return 0;
    });
    let rank = 1;
    const rankedTeams = [];
    sortedTeams.forEach((team, index) => {
        if (index === 0) {
            rankedTeams.push({ ...team, rank, showRank: true });
            return;
        }
        if (sortedTeams[index - 1].score === team.score) {
            rankedTeams.push({ ...team, rank, showRank: false });
            return;
        }
        rankedTeams.push({ ...team, rank: ++rank, showRank: true });
    });
    return (
        <MainBox>
            <h1>Top Teams</h1>
            {rankedTeams.map(({ name, slackChannel, score, rank, showRank, achievements }) => (
                <Team key={`team-leaderboard-${slackChannel}`}
                      rank={rank}
                      showRank={showRank}
                      name={name}
                      slackChannel={slackChannel}
                      achievements={achievements}
                      score={score} />
            ))}
        </MainBox>
    );
}

export default connect(
    state => ({
        teams: state.teams,
        achievements: state.achievements
    })
)(Teams);
