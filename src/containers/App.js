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
import Teams from "./Teams";

class App extends Component {
    getChildContext() {
        return {
            muiTheme: getMuiTheme(theme)
        };
    }

    render() {
        return (
            <div>
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
                <Teams />
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;

