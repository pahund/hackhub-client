/**
 * index.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import handleUpdateTeams from "./handlers/handleUpdateTeams";

export default (state, action) => {
    switch (action.type) {
        case "UPDATE_TEAMS":
            return handleUpdateTeams(state, action);
        default:
    }
    return state;
}
