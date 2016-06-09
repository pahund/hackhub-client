/**
 * handleUpdateTeams.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 05 Jun 2016
 */
export default (state, { teamUpdate }) => state.map(
    team => {
        const { score, achievements } = teamUpdate[team.slackChannel];
        return Object.assign({}, team, { score, achievements })
    }
);
