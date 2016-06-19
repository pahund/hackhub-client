/**
 * isPast.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 19 Jun 2016
 */
import getDateForTimezone from "./getDateForTimezone";
import config from "../config";

export default dateStr => {
    const date = getDateForTimezone(new Date(dateStr), config.timezone).getTime();
    const now = getDateForTimezone(new Date(), config.timezone).getTime();
    return date + 24 * 60 * 60 * 1000 < now;
};
