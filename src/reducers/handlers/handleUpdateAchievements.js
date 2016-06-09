/**
 * handleUpdateAchievements.js
 *
 * @author <a href="mailto:pahund@achievement.mobile.de">Patrick Hund</a>
 * @since 09 Jun 2016
 */
export default (state, { achievementUpdate }) => state.map(
    achievement => {
        const { available, teams } = achievementUpdate[achievement.codeName];
        return Object.assign({}, achievement, { available, teams })
    }
);
