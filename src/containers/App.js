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
                    },
                    {
                        label: "Schedule",
                        onActive: () => router.push("/schedule/"),
                        value: "/schedule/"
                    }
                ]} />
                {children}
                {achievementUnlocked !== null ? (
                    <Dialog title="Achievement unlocked!"
                            modal={false}
                            titleStyle={{
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top right",
                                backgroundImage: `url(/images/team-badges/${achievementUnlocked.team.slackChannel}.png)`,
                                textShadow: "0 0 0.2em white, 0 0 0.2em white, 0 0 0.2em white, 0 0 0.2em white, 0 0 0.2em white, 0 0 0.2em white",
                                fontWeight: "bold",
                                textAlign: "right",
                                paddingTop: "10px"
                            }}
                            open>
                        <p>
                            Team <strong>{achievementUnlocked.team.name}</strong>{nbsp}
                            has just unlocked achievement:{nbsp}
                        </p>
                        <h2 style={{
                            margin: "20px 50px 10px 50px"
                        }}>{achievementUnlocked.achievement.name}</h2>
                        <p style={{
                            margin: "10px 50px 20px 50px",
                            fontSize: "1.2em"
                        }}>
                            {achievementUnlocked.achievement.description}
                        </p>
                        <p>
                            Score: <strong>{achievementUnlocked.achievement.score} points</strong>
                        </p>
                        <p>
                            <em>Congratulations – you are awesome!</em>
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
