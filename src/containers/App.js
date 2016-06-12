/**
 * App.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React, { Component, PropTypes } from "react";
import MainMenu from "../components/MainMenu";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "../config/theme";
import Teams from "./Teams";
import { withRouter } from "react-router"
import Dialog from "material-ui/Dialog";
import { connect } from "react-redux";
import nbsp from "../util/nbsp";

class App extends Component {
    getChildContext() {
        return {
            muiTheme: getMuiTheme(theme)
        };
    }

    render() {
        const { children, router, location, messages: { achievementUnlocked } } = this.props;
        const current = location.pathname === "/" ? "/teams/" : location.pathname;
        return (
            <div>
                <MainMenu current={current} onLogoClick={() => router.push("/")} items={[
                    {
                        label: "Teams",
                        onActive: () => router.push("/teams/"),
                        value: "/teams/"
                    },
                    {
                        label: "Achievements",
                        onActive: () => router.push("/achievements/"),
                        value: "/achievements/"
                    },
                    {
                        label: "Hackers",
                        onActive: () => router.push("/hackers/"),
                        value: "/hackers/"
                    }
                ]} />
                {children}
                {achievementUnlocked !== null ? (
                    <Dialog title="Achievement unlocked!"
                            modal={false}
                            open>
                        <p>
                            Team <strong>{achievementUnlocked.team.name}</strong>{nbsp}
                            has just unlocked achievement{nbsp}
                            <strong>{achievementUnlocked.achievement.name}:</strong>
                        </p>
                        <p>
                            <em>{achievementUnlocked.achievement.description}</em>
                        </p>
                        <p>
                            Score: <strong>{achievementUnlocked.achievement.score} points</strong>
                        </p>
                        <p>
                            Congratulations – you are awesome!
                        </p>
                    </Dialog>
                ) : null}
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default connect(
    state => ({
        messages: state.messages
    })
)(withRouter(App));
