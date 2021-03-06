import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import styles from "./mainMenu.css";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

function MainMenu({ items, current, onLogoClick }) {
    const smallScreen = window.matchMedia("(max-width: 600px)").matches;
    const largeScreen = window.matchMedia("(min-width: 1000px)").matches;
    const largeScreenMenu = (
        <Tabs value={current}
              className={styles.menu}>
            {items.map((item, index) =>
                <Tab className={styles.menuItem}
                     style={{ padding: "0 6px 0 6px" }}
                     label={item.label}
                     onActive={item.onActive}
                     key={`mainMenu-item${index}`}
                     value={item.value} />
            )}
        </Tabs>
    );
    const iconStyle = largeScreen ? { width: "180px", padding: 0, marginRight: "8px" } :
        { width: "50px", height: "50px", padding: 0, marginRight: "8px" };
    const logo = (
        <IconButton style={iconStyle} onClick={onLogoClick}>
            <img src={`/images/techhack-logo-${largeScreen ? "wide" : "square"}.svg`} />
        </IconButton>
    );
    const smallScreenMenu = (
        <IconMenu iconButtonElement={<IconButton className={styles.menu}><MoreVertIcon color="#ffffff" /></IconButton>}
                  anchorOrigin={{horizontal: "right", vertical: "top"}}
                  targetOrigin={{horizontal: "right", vertical: "top"}}>
            {items.map((item, index) =>
                <MenuItem onClick={item.onActive}
                          key={`mainMenu-item${index}`}
                          primaryText={item.label} />
            )}
        </IconMenu>
    );
    return (
        <AppBar title={largeScreen ? "eBay Classifieds Group TechHack 2016" : "eCG TechHack 2016"}
                iconElementLeft={logo}
                style={{ paddingRight: "8px", backgroundColor: "#000000" }}>
            {smallScreen ? smallScreenMenu : largeScreenMenu}
        </AppBar>
    );
}

export default MainMenu;
