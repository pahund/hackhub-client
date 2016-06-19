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
import prepareTeamHackers from "../util/prepareTeamHackers";
import teamSorter from "../util/teamSorter";

function Teams({ teams, achievements, hackers, topics }) {
    const populatedTeams = teams.map(team => ({
        ...team,
        achievements: team.achievements.map(
            codeName => achievements.find(achievement => achievement.codeName === codeName)
        ).sort(achievementSorter),
        hackers: prepareTeamHackers(team.hackers, hackers),
        topic: topics.find(({ codeName }) => codeName === team.topic)
    }));
    const sortedTeams = populatedTeams.sort(teamSorter);
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
            {rankedTeams.map(({ name, slackChannel, score, rank, showRank, achievements, hackers, topic }) => (
                <Team key={`team-leaderboard-${slackChannel}`}
                      rank={rank}
                      showRank={showRank}
                      name={name}
                      slackChannel={slackChannel}
                      achievements={achievements}
                      score={score}
                      hackers={hackers}
                      topic={topic} />
            ))}
        </MainBox>
    );
}

export default connect(
    state => ({
        teams: state.teams,
        achievements: state.achievements,
        hackers: state.hackers,
        topics: state.topics
    })
)(Teams);
