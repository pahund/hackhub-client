/**
 * Hackers.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import Hacker from "../components/Hacker";
import MainBox from "../components/MainBox";
import hackerSorter from "../util/hackerSorter";

function Hackers({ hackers }) {
    const sortedHackers = hackers.sort(hackerSorter);
    return (
        <MainBox>
            <h1>eCG Hackers</h1>
            {sortedHackers.map(({ name, userName, description, isSubmitter, isSiteOps }) => (
                <Hacker key={`hacker-${userName}`}
                        name={name}
                        userName={userName}
                        description={description}
                        isSubmitter={isSubmitter}
                        isSiteOps={isSiteOps} />
            ))}
        </MainBox>
    );
}

export default connect(
    state => ({
        hackers: state.hackers
    })
)(Hackers);
