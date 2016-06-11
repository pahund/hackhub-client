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
import CheckCircle from "material-ui/svg-icons/action/check-circle";
import IconWithTooltip from "../IconWithTooltip";

import { grey300, yellowA400, amber600, green500 } from 'material-ui/styles/colors';

export default ({
    name,
    description,
    score,
    available
}) => {
    return (
        <Paper className={styles.achievement} style={{
            borderRadius: "10px"
        }}>
            <div className={styles.icon}>
                {getIcon(score)}
            </div>
            <div className={styles.score}>
                {score} {score === 1 ? "Point" : "Points"}
            </div>
            <div className={styles.name}>
                <div>
                    <strong className={available ? null : styles.notAvailable}>{name}</strong>
                    {
                        available ? null :
                            <IconWithTooltip tooltip="Achievement was already unlocked"
                                         size={24}
                                         style={{ marginLeft: "5px" }}
                                         Icon={CheckCircle}
                                         color={green500} />
                    }
                    <br />
                    {description}
                </div>
            </div>
        </Paper>
    );
}

function getIcon(score) {
    let color,
        Icon,
        size,
        tooltip;
    if (score >= 30) {
        color = yellowA400;
        size = 48;
        Icon = Stars;
        tooltip = "Gold Achievement";
    } else if (score >= 20) {
        color = grey300;
        size = 48;
        Icon = Stars;
        tooltip = "Silver Achievement";
    } else if (score >= 10) {
        color = amber600;
        size = 48;
        Icon = Stars;
        tooltip = "Bronze Achievement";
    } else {
        color = "white";
        size = 32;
        Icon = Star;
        tooltip = "Bonus Achievement";
    }
    return (
        <IconWithTooltip Icon={Icon} color={color} tooltip={tooltip} size={size} />
    );
}
