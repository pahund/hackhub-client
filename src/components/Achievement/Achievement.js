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
import Star from "material-ui/svg-icons/toggle/star";

import { grey300, yellowA400, amber600 } from 'material-ui/styles/colors';

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
    const color = score >= 30 ? yellowA400 : score >= 20 ? grey300 : score >= 10 ? amber600 : "#ffffff";
    const Icon = score >= 10 ? Stars : Star;
    const size = score >= 10 ? 48 : 32;
    return <Icon color={color} style={{ width: `${size}px`, height: `${size}px` }} />
}
