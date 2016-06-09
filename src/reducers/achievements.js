/**
 * achievements.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Jun 2016
 */
import handleUpdateAchievements from "./handlers/handleUpdateAchievements";

export default (state = [], action) => {
    switch (action.type) {
        case "UPDATE_ACHIEVEMENTS":
            return handleUpdateAchievements(state, action);
        default:
    }
    return state;
}
