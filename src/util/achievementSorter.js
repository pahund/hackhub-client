/**
 * achievementSorter.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 11 Jun 2016
 */
export default ({ name: name1, score: score1 }, { name: name2, score: score2 }) => {
    if (score1 < score2) {
        return 1;
    }
    if (score1 > score2) {
        return -1;
    }
    const normalized = {
        name1: name1.toLocaleLowerCase(),
        name2: name2.toLocaleLowerCase()
    };
    if (normalized.name1 > normalized.name2) {
        return 1;
    }
    if (normalized.name1 < normalized.name2) {
        return -1;
    }
    return 0;
};
