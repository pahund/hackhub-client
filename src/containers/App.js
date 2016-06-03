/**
 * App.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

function App({ hackers }) {
    return <ul>{hackers.map(({ name, userName, businessUnit, description, score }) => (
        <li>
            {name}
            {userName}
            {businessUnit}
            {description}
            {score}
        </li>
    ))}</ul>
}

export default connect(
    state => ({
        hackers: state.hackers
    })
)(App);
