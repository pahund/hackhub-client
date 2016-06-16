/**
 * renderTimeZone.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Jun 2016
 */
export default () => {
    const offsetHours = new Date().getTimezoneOffset() / 60
    return `UTC${offsetHours < 0 ? "+" : "-"}${Math.abs(offsetHours)}`;
}
