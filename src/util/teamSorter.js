/**
 * teamSorter.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 19 Jun 2016
 */
export default ({ score: score1, name: name1 }, { score: score2, name: name2 }) => {
    if (score1 < score2) {
        return 1;
    }
    if (score1 > score2) {
        return -1;
    }
    if (name1 > name2) {
        return 1;
    }
    if (name1 < name2) {
        return -1;
    }
    return 0;
};
