/**
 * hackerSorter.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 17 Jun 2016
 */
export default ({ name: name1 }, { name: name2 }) => {
    const { nname1, nname2 } = {
        nname1: name1.toLocaleLowerCase(),
        nname2: name2.toLocaleLowerCase()
    };
    return nname1 > nname2 ? 1 : nname1 < nname2 ? -1 : 0;
};
