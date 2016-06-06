/**
 * handleUpdateHackers.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 05 Jun 2016
 */
// export default (state, { scores }) =>
//     Object.assign({}, state, {
//         hackers: state.hackers.map(
//             hacker => Object.assign({}, hacker, { score: scores[ hacker.userName ]})
//         )
//     });


export default (state, { scores }) => Object.assign({}, state, {
    hackers: state.hackers.map(
        hacker => Object.assign({}, hacker, { score: scores[hacker.userName] })
    )
});
