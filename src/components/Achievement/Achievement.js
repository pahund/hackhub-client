/**
 * Achievement.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 08 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./achievement.css";
import Paper from "material-ui/Paper";
import Stars from "material-ui/svg-icons/action/stars";
import { grey200, yellowA200, amber400 } from 'material-ui/styles/colors';

export default ({
    name,
    description,
    score
}) => {
    return (
        <Paper className={styles.achievement} style={{
            borderRadius: "10px"
        }}>
            <div className={styles.icon}>
                {getIcon(score)}
            </div>
            <div className={styles.score}>
                {score} Points
            </div>
            <div className={styles.name}>
                <div>
                    <strong>{name}</strong><br />
                    {description}
                </div>
            </div>
        </Paper>
    );
}

function getIcon(score) {
    const color = score >= 30 ? yellowA200 : score >= 20 ? grey200 : amber400;
    return <Stars color={color} style={{ width: "48px", height: "48px" }} />
}
