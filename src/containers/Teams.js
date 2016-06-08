/**
 * Teams.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import Team from "../components/Team";
import MainBox from "../components/MainBox";

function Teams({ teams }) {
    const sortedTeams = teams.sort(({ score: score1, name: name1 }, { score: score2, name: name2 }) => {
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
            {rankedTeams.map(({ name, slackChannel, score, rank, showRank }) => (
                <Team key={`team-leaderboard-${slackChannel}`}
                                 rank={rank}
                                 showRank={showRank}
                                 name={name}
                                 slackChannel={slackChannel}
                                 score={score} />
            ))}
        </MainBox>
    );
}

export default connect(
    state => ({
        teams: state.teams
    })
)(Teams);
