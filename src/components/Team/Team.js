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
import IconWithTooltip from "../IconWithTooltip";
import Stars from "material-ui/svg-icons/action/stars";
import Star from "material-ui/svg-icons/toggle/star";
import { grey300, yellowA400, amber800, grey800 } from 'material-ui/styles/colors';

export default ({
    slackChannel,
    rank,
    showRank,
    score,
    name,
    achievements
}) => {
    const smallScreen = window.matchMedia('(max-width: 600px)').matches;
    const renderedAchievements = achievements.map(achievement => getIcon(smallScreen, slackChannel, achievement))
    return (
        <Paper className={styles.team} style={{
            backgroundImage: `url(/images/team-badges/${slackChannel}.png)`,
            borderRadius: "10px"
        }}>
            <div className={styles.firstRow}>
                <div className={styles.rank}>{showRank ? rank : null}</div>
                <div className={styles.score}>{zeroPad(score)}</div>
                <div className={styles.name}>
                    <div>
                        <strong>{name}</strong>
                    </div>
                </div>
                {smallScreen ? null : <div className={styles.achievements}>{renderedAchievements}</div>}
            </div>
            {smallScreen ? <div className={styles.secondRow}>{renderedAchievements}</div> : null}
        </Paper>
    );
}

function getIcon(smallScreen, slackChannel, { score, name, codeName }) {
    const tooltip = `${name} (${score} pt)`;
    const tooltipPosition = smallScreen ? "top-right" : "top-left";
    let color,
        Icon = Stars,
        iconStyle = { filter: "drop-shadow(0 0 2px #000)" };
    if (score >= 30) {
        color = yellowA400;
    } else if (score >= 20) {
        color = grey300;
    } else if (score >= 10) {
        color = amber800;
    } else {
        color = grey800;
        Icon = Star;
        iconStyle = { filter: "drop-shadow(0 0 2px #fff)" };
    }
    return (
        <IconWithTooltip key={`achievement-${slackChannel}-${codeName}`}
                         Icon={Icon}
                         color={color}
                         tooltip={tooltip}
                         size={32}
                         iconStyle={iconStyle}
                         tooltipPosition={tooltipPosition} />
    );
}
