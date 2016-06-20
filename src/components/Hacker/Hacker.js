/**
 * Hacker.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./hacker.css";
import Paper from "material-ui/Paper";
import Avatar from "../Avatar";
import IconWithTooltip from "../IconWithTooltip";
import Submitter from "material-ui/svg-icons/action/lightbulb-outline";
import SiteOps from "material-ui/svg-icons/action/settings";
import Slack from "../icons/Slack";

export default ({
    userName,
    name,
    description,
    isSubmitter,
    isSiteOps
}) => (
    <Paper className={styles.hacker} style={{
        borderRadius: "10px"
    }}>
        <div className={styles.avatar}>
            <Avatar userName={userName} />
        </div>
        <div className={styles.name}>
            <div>
                <strong>{name}</strong>
                {description ? <br /> : null}
                {description || null}
                <br />
                <IconWithTooltip size={15}
                                 style={{ marginRight: "5px" }}
                                 Icon={Slack}
                                 tooltip="Slack"
                                 tooltipPosition="top-center" />
                <a href={`https://ebayclassifiedsgroup.slack.com/team/${userName}`}>{userName}</a>
            </div>
        </div>
        {isSubmitter || isSiteOps ? (
            <div>
                {isSubmitter ? (
                    <IconWithTooltip size={24}
                                     Icon={Submitter}
                                     tooltip="Topic Owner"
                                     tooltipPosition="top-left" />
                ) : null}
                {isSiteOps ? (
                    <IconWithTooltip size={24}
                                     Icon={SiteOps}
                                     tooltip="SiteOps"
                                     tooltipPosition="top-left" />
                ) : null}
            </div>
        ) : null}
    </Paper>
);
