/**
 * theme.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 25 Mar 2016
 */
import {
    deepPurpleA400,
    indigo500,
    blue500,
    orange500,
    cyan500,
    cyan700,
    lightBlack,
    pinkA200,
    grey100,
    grey300,
    grey500,
    darkBlack,
    white,
    orange700,
    greenA700,
    grey200,
    purpleA700
} from "material-ui/styles/colors";
import { fade } from "material-ui/utils/colorManipulator";
import Spacing from "material-ui/styles/spacing";
import zIndex from "material-ui/styles/zIndex";

export default {
    spacing: Spacing,
    zIndex: zIndex,
    fontFamily: "Roboto, sans-serif",
    palette: {
        primary1Color: darkBlack,
        primary2Color: cyan700,
        primary3Color: lightBlack,
        accent1Color: "#86B817", // eBay green
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500
    }
};
