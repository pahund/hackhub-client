/**
 * IconWithTooltip.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 11 Jun 2016
 */
import React from "react";
import IconButton from "material-ui/IconButton";

function IconWithTooltip({
    tooltip,
    size = 32,
    style = {},
    color = "black",
    Icon,
    tooltipPosition = "top-right",
    iconStyle
}) {
    const wrapperStyle = {
        padding: 0,
        margin: 0,
        cursor: "default",
        width: `${size}px`,
        height: `${size}px`,
        ...style
    };
    const finalIconStyle = {
        width: `${size}px`,
        height: `${size}px`,
        ...iconStyle
    };
    return (
        <IconButton disableTouchRipple={true}
                    touch
                    tooltipPosition={tooltipPosition}
                    tooltip={tooltip}
                    style={wrapperStyle}
                    iconStyle={finalIconStyle}>
            <Icon color={color} />
        </IconButton>
    );
}

export default IconWithTooltip;
