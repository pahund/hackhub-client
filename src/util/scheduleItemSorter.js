/**
 * scheduleItemSorter.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 15 Jun 2016
 */
export default ({ start: start1 }, { start: start2 }) => {
    const t1 = start1.getTime();
    const t2 = start2.getTime();
    return t1 > t2 ? 1 : t1 < t2 ? -1 : 0;
};
