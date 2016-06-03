/**
 * zeroPad.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
export default number => number <= 999 ? (`00${number}`).slice(-3) : number;
