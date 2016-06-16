/**
 * prepareSchedule.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Jun 2016
 */
import config from "../config";
import getDateForTimezone from "../util/getDateForTimezone";
import scheduleItemSorter from "../util/scheduleItemSorter";

export default scheduleItems => scheduleItems.map(item => ({
    ...item,
    start: getDateForTimezone(new Date(item.start), config.timezone),
    end: item.end ? getDateForTimezone(new Date(item.end), config.timezone) : null,
})).sort(scheduleItemSorter).map((item, i, arr) => ({
    ...item,
    status: getStatus(item, i, arr)
}));

function getStatus({ start, end }, i, arr) {
    const now = getDateForTimezone(new Date(), config.timezone).getTime();
    const startTime = start.getTime();
    const nextItem = arr[i + 1];
    const endTime = end ? end.getTime() : nextItem ? nextItem.start.getTime() : now + 1;
    if (now < startTime) {
        return "future";
    }
    if (startTime <= now && now < endTime) {
        return "present";
    }
    if (now > endTime) {
        return "past";
    }
}
