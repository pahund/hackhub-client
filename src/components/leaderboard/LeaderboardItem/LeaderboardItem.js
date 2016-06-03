/**
 * LeaderboardItem.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./leaderboardItem.scss";
import Paper from "material-ui/Paper";
import zeroPad from "../../../util/zeroPad";

export default props => {
    return (
        <Paper className={styles.leaderboardItem}>
            <div className={styles.rank}>{props.rank}</div>
            <div className={styles.score}>{zeroPad(props.score)}</div>
            <div className={styles.name}>
                <strong>{props.name}</strong>
                {props.description ? <br /> : null}
                {props.description}
            </div>
        </Paper>
    );
}