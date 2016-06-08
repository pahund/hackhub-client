/**
 * App.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import MainMenu from "../components/header/MainMenu";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "../config/theme";

class App extends Component {
    getChildContext() {
        return {
            muiTheme: getMuiTheme(theme)
        };
    }

    render() {
        return (
            <MainMenu items={[
                {
                    label: "Teams"
                },
                {
                    label: "Achievements"
                },
                {
                    label: "Hackers"
                }
            ]} />
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;

