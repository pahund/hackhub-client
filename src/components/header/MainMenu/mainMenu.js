import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";

function MainMenu(props) {
    const { items, current, onLogoClick } = props;
    return (
        <AppBar title="eCG Tech Hack 2016"
                iconElementLeft={
                    <IconButton style={{ width: "180px", padding: 0 }}
                                onClick={onLogoClick}>
                        <img src="/images/techhack-logo.svg" />
                    </IconButton>
                }>
            <Tabs value={current} style={{ marginTop: "8px" }}>
                {items.map((item, index) =>
                    <Tab style={{ minWidth: "120px" }}
                         label={item.label}
                         onActive={item.onActive}
                         key={`mainMenu-item${index}`}
                         value={item.value} />
                )}
            </Tabs>
        </AppBar>
    );
}

export default MainMenu;
