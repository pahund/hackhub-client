/**
 * prepareTeamHackers.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 17 Jun 2016
 */
import hackerSorter from "./hackerSorter";

export default (userNames, hackers) => {
    const populated = userNames.map(userName => hackers.find(({ userName: u }) => u === userName));
    const submitter = populated.filter(({ isSubmitter }) => isSubmitter);
    const siteOps = populated.filter(({ isSubmitter, isSiteOps }) => isSiteOps && !isSubmitter);
    const other = populated.filter(({ isSiteOps, isSubmitter }) => !isSubmitter && !isSiteOps).sort(hackerSorter);
    return other.concat(submitter).concat(siteOps);
}
