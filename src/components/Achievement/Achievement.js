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
import { grey300, yellowA400, amber800, green500 } from 'material-ui/styles/colors';

export default ({
    name,
    description,
    score,
    available,
    teams
}) => {
    return (
        <Paper style={{ borderRadius: "10px" }} className={styles.achievement}>
            <div className={styles.firstRow}>
                <div className={styles.icon}>
                    {getIcon(score)}
                </div>
                <div className={styles.score}>
                    {score} {score === 1 ? "Point" : "Points"}
                </div>
                <div className={styles.name}>
                    <div>
                        <strong className={available ? null : styles.notAvailable}>{name}</strong>
                        <br />
                        {description}
                    </div>
                </div>
            </div>
            {teams.length ? (
                <div className={styles.secondRow}>
                    <div />
                    <div>
                        {
                            available ? null :
                                <IconWithTooltip tooltip="Achievement was already unlocked"
                                                 size={24}
                                                 style={{ marginRight: "5px" }}
                                                 Icon={CheckCircle}
                                                 color={green500} />
                        }
                        Achieved by {teams.map(team => team.name).join(", ")}
                    </div>
                </div>
            ) : null}
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
        color = amber800;
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
