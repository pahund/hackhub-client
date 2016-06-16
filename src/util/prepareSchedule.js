/**
 * prepareSchedule.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Jun 2016
 */
import config from "../config";
import getDateForTimezone from "../util/getDateForTimezone";

export default scheduleItems => scheduleItems.map(item => ({
    ...item,
    start: getDateForTimezone(new Date(item.start), config.timezone),
    end: item.end ? getDateForTimezone(new Date(item.end), config.timezone) : null
}));
