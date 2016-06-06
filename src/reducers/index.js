/**
 * index.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import handleUpdateHackers from "./handlers/handleUpdateHackers";

export default (state, action) => {
    switch (action.type) {
        case "UPDATE_HACKERS":
            return handleUpdateHackers(state, action);
        default:
    }
    return state;
}
