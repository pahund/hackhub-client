/**
 * Hackers.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import Leaderboard from "../components/leaderboard/Leaderboard";
import LeaderboardItem from "../components/leaderboard/LeaderboardItem";

function App({ hackers }) {
    // PH_TODO: don't do this every time the component is rendered, only when data is updated
    const sortedHackers = hackers.sort(({ score: score1 }, { score: score2 }) => {
        if (score1 < score2) {
            return 1;
        }
        if (score1 > score2) {
            return -1;
        }
        return 0;
    });
    let rank = 1;
    const rankedHackers = [];
    sortedHackers.forEach((hacker, index) => {
        if (index === 0) {
            rankedHackers.push({ ...hacker, rank, showRank: true });
            return;
        }
        if (sortedHackers[index - 1].score === hacker.score) {
            rankedHackers.push({ ...hacker, rank, showRank: false });
            return;
        }
        rankedHackers.push({ ...hacker, rank: ++rank, showRank: true });
    });
    return (
        <div>
            <h1>Top Hackers</h1>
            <Leaderboard>{rankedHackers.map(({ name, userName, description, score, rank, showRank }) => (
                <LeaderboardItem key={`user-leaderboard-${userName}`}
                                 rank={rank}
                                 showRank={showRank}
                                 name={name}
                                 userName={userName}
                                 description={description}
                                 score={score} />
            ))}</Leaderboard>
        </div>
    );
}

export default connect(
    state => ({
        hackers: state.hackers
    })
)(App);
