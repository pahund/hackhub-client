/**
 * messages.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 12 Jun 2016
 */
import handleHideAchievementMessage from "./handlers/handleHideAchievementMessage";
import handleShowAchievementMessage from "./handlers/handleShowAchievementMessage";

export default (state = {}, action) => {
    switch (action.type) {
        case "SHOW_ACHIEVEMENT_MESSAGE":
            return handleShowAchievementMessage(state, action);
        case "HIDE_ACHIEVEMENT_MESSAGE":
            return handleHideAchievementMessage(state, action);
    }
    return state;
};
