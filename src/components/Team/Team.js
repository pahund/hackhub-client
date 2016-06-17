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
import { grey300, yellowA400, amber800, grey800 } from "material-ui/styles/colors";
import Avatar from "../Avatar";
import Submitter from "material-ui/svg-icons/action/lightbulb-outline";
import SiteOps from "material-ui/svg-icons/action/settings";

export default ({
    slackChannel,
    rank,
    showRank,
    score,
    name,
    achievements,
    hackers
}) => {
    const smallScreen = window.matchMedia("(max-width: 600px)").matches;
    const renderedAchievements = achievements.map(achievement => getIcon(smallScreen, slackChannel, achievement));
    const submitterIcon = <IconWithTooltip size={24} Icon={Submitter} tooltip="Project idea originator" />;
    const siteOpsIcon = <IconWithTooltip size={24} Icon={SiteOps} tooltip="SiteOps" />;
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
            <div className={styles.hackers}>
                {hackers.map(({ name, userName, isSubmitter, isSiteOps }) => (
                    <div className={styles.hacker} key={`team-hacker-${userName}`}>
                        <Avatar userName={userName} small />
                        <div>{name}</div>
                        {isSubmitter ? submitterIcon : null}
                        {isSiteOps ? siteOpsIcon : null}
                    </div>
                ))}
            </div>
        </Paper>
    );
}

function getIcon(smallScreen, slackChannel, { score, name, codeName }) {
    const tooltip = `${name} (${score} pt)`;
    const tooltipPosition = smallScreen ? "top-right" : "top-left";
    let color,
        Icon = Stars,
        iconStyle = { strokeWidth: "0.5px", stroke: "black" };
    if (score >= 30) {
        color = yellowA400;
    } else if (score >= 20) {
        color = grey300;
    } else if (score >= 10) {
        color = amber800;
    } else {
        color = grey800;
        Icon = Star;
        iconStyle = { strokeWidth: "0.5px", stroke: "white" };
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
