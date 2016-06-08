import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";

function MainMenu(props) {
    const { items } = props;
    return (
        <AppBar title="eCG Tech Hack 2016"
                style={{ backgroundColor: "black" }}
                iconElementLeft={
                    <IconButton style={{ width: "180px", padding: 0 }}>
                        <img src="./images/techhack-logo.svg" />
                    </IconButton>
                }>
            <Tabs style={{ marginTop: "8px" }}>
                {items.map(item =>
                    <Tab style={{ minWidth: "120px", backgroundColor: "black" }} label={item.label} />
                )}
            </Tabs>
        </AppBar>
    );
}

export default MainMenu;
