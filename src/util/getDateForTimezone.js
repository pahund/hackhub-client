/**
 * getDateForTimezone.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Jun 2016
 */
export default (date, tz) => {
    const offsetHours = new Date().getTimezoneOffset() / 60 + tz;
    return new Date(date.getTime() + (offsetHours * 60 * 60 * 1000));
}
