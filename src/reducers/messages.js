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
            console.log("[PH_LOG] REDUCER team:", action.team); // PH_TODO: REMOVE
            console.log("[PH_LOG] REDUCER achievement:", action.achievement); // PH_TODO: REMOVE
            return handleShowAchievementMessage(state, action);
        case "HIDE_ACHIEVEMENT_MESSAGE":
            return handleHideAchievementMessage(state, action);
    }
    return state;
};
