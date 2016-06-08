/**
 * App.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
import React from "react";
import MainMenu from "../components/header/MainMenu";

function App() {
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

export default App;

