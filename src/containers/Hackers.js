/**
 * Hackers.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import Leaderboard from "../components/leaderboard/Leaderboard";
import UserListItem from "../components/leaderboard/UserListItem";
import MainBox from "../components/MainBox";

function App({ hackers }) {
    const sortedHackers = hackers.sort(({ name: name1 }, { name: name2 }) => {
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
    return (
        <MainBox>
            <h1>eCG Hackers</h1>
            <Leaderboard>{sortedHackers.map(({ name, userName, description, score, rank, showRank }) => (
                <UserListItem key={`hacker-${userName}`}
                                 name={name}
                                 userName={userName}
                                 description={description} />
            ))}</Leaderboard>
        </MainBox>
    );
}

export default connect(
    state => ({
        hackers: state.hackers
    })
)(App);
