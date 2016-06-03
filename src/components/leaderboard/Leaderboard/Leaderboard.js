/**
 * Leaderboard.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./leaderboard.scss";

export default props => {
    return <div className={styles.leaderboard} {...props} />;
}