/**
 * index.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
export default (state, action) => {
    switch (action.type) {
        case "UPDATE_HACKERS":
            return { ...state, hackers: action.hackers };
        default:
    }
    return state;
}
