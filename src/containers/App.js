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
import { withRouter } from "react-router"

class App extends Component {
    getChildContext() {
        return {
            muiTheme: getMuiTheme(theme)
        };
    }

    render() {
        const { children, router, location } = this.props;
        const current = location.pathname === "/" ? "/teams/" : location.pathname;
        return (
            <div>
                <MainMenu current={current} onLogoClick={() => router.push("/")} items={[
                    {
                        label: "Teams",
                        onActive: () => router.push("/teams/"),
                        value: "/teams/"
                    },
                    // {
                    //     label: "Achievements",
                    //     onActive: () => router.push("/achievements")
                    //     value: "/achievements"
                    // },
                    {
                        label: "Hackers",
                        onActive: () => router.push("/hackers/"),
                        value: "/hackers/"
                    }
                ]} />
                {children}
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default withRouter(App);

