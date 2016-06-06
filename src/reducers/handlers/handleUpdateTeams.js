/**
 * handleUpdateTeams.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 05 Jun 2016
 */
export default (state, { scores }) => Object.assign({}, state, {
    teams: state.teams.map(
        team => Object.assign({}, team, { score: scores[team.slackChannel] })
    )
});
