/**
 * showAchievementMessage.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 12 Jun 2016
 */
export default (team, achievement) => ({
    type: "SHOW_ACHIEVEMENT_MESSAGE",
    team,
    achievement
});
