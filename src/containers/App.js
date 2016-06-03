/**
 * App.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import Leaderboard from "../components/leaderboard/Leaderboard";
import LeaderboardItem from "../components/leaderboard/LeaderboardItem";

function App({ hackers }) {
    return (
        <div>
            <h1>Hacker Leaderboard</h1>
            <Leaderboard>{hackers.map(({ name, userName, description, score }, index) => (
                <LeaderboardItem key={`user-leaderboard-${userName}`}
                                 rank={index + 1}
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
