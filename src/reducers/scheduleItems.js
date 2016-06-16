/**
 * scheduleItems.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 15 Jun 2016
 */
import handleUpdateSchedule from "./handlers/handleUpdateSchedule";

export default (state = [], action) => {
    switch (action.type) {
        case "UPDATE_SCHEDULE":
            return handleUpdateSchedule(state, action);
        default:
    }
    return state;
}

