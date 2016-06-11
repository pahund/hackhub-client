/**
 * IconWithTooltip.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 11 Jun 2016
 */
import React from "react";
import IconButton from "material-ui/IconButton";

function IconWithTooltip({ tooltip, size = 32, style = {}, color = "black", Icon }) {
    const wrapperStyle = {
        padding: 0,
        margin: 0,
        cursor: "default",
        width: `${size}px`,
        height: `${size}px`,
        ...style
    };
    const iconStyle = {
        width: `${size}px`,
        height: `${size}px`
    };
    return (
        <IconButton disableTouchRipple={true}
                    touch
                    tooltipPosition="top-right"
                    tooltip={tooltip}
                    style={wrapperStyle}
                    iconStyle={iconStyle}>
            <Icon color={color} />
        </IconButton>
    );
}

export default IconWithTooltip;
