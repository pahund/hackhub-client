/**
 * Achievements.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 08 Jun 2016
 */
import React from "react";
import MainBox from "../components/MainBox";
import Achievement from "../components/Achievement";
import { connect } from "react-redux";
import achievementSorter from "../util/achievementSorter";
import IconWithTooltip from "../components/IconWithTooltip";
import Slack from "../components/icons/Slack";

function Achievements({ achievements, teams }) {
    const achievementsWithPopulatedTeams = achievements.map(achievement => ({
        ...achievement,
        teams: achievement.teams.map(slackChannel => teams.find(team => team.slackChannel === slackChannel))
    }));
    const sortedAchievements = achievementsWithPopulatedTeams.sort(achievementSorter);
    const primaryAchievements = sortedAchievements.filter(({ singleton }) => singleton);
    const secondaryAchievements = sortedAchievements.filter(({ singleton }) => !singleton);
    return (
        <MainBox>
            <h1>Achievements</h1>
            <h2>Gold, Silver and Bronze – each is awarded to one team only</h2>
            {primaryAchievements.map(({ name, codeName, description, score, available, teams }) => (
                <Achievement key={`achievement-${codeName}`}
                             name={name}
                             score={score}
                             description={description}
                             available={available}
                             teams={teams} />
            ))}
            <h2>Bonus Achievements – can be awarded to multiple teams</h2>
            <p>
                To claim an achievement for your team, post a message in Slack:
                <IconWithTooltip size={15}
                                 style={{ margin: "0 5px" }}
                                 Icon={Slack}
                                 tooltip="Slack"
                                 tooltipPosition="top-center" />
                <a href="https://ebayclassifiedsgroup.slack.com/messages/ecg-tech-hack-2016/">ecg-tech-hack-2016</a>
            </p>
            {secondaryAchievements.map(({ name, codeName, description, score, available, teams }) => (
                <Achievement key={`achievement-${codeName}`}
                             name={name}
                             score={score}
                             description={description}
                             available={available}
                             teams={teams} />
            ))}
        </MainBox>
    );
}

export default connect(
    state => ({
        achievements: state.achievements,
        teams: state.teams
    })
)(Achievements);
