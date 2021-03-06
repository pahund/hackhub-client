/**
 * index.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import { combineReducers } from "redux";
import achievements from "./achievements";
import teams from "./teams";
import hackers from "./hackers";
import messages from "./messages";
import scheduleItems from "./scheduleItems";
import topics from "./topics";

export default combineReducers({
    achievements,
    teams,
    hackers,
    messages,
    scheduleItems,
    topics
});
