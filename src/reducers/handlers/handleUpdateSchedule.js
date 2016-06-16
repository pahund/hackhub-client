/**
 * handleUpdateSchedule.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Jun 2016
 */
import prepareSchedule from "../../util/prepareSchedule";

export default (state, { scheduleItems }) => prepareSchedule(scheduleItems);
