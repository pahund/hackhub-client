/**
 * Team.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./team.css";
import Paper from "material-ui/Paper";
import zeroPad from "../../util/zeroPad";

export default props => {
    return (
        <Paper className={styles.team} style={{
            backgroundImage: `url(/images/team-badges/${props.slackChannel}.png)`,
            borderRadius: "10px"
        }}>
            <div className={styles.rank}>{props.showRank ? props.rank : null}</div>
            <div className={styles.score}>{zeroPad(props.score)}</div>
            <div className={styles.name}>
                <div>
                    <strong>{props.name}</strong>
                </div>
            </div>
        </Paper>
    );
}
