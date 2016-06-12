/**
 * handleShowAchievementMessage.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 12 Jun 2016
 */
export default (state, { team, achievement }) => ({
    ...state,
    achievementUnlocked: {
        team,
        achievement
    }
});
