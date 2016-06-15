/**
 * index.js
 *
 * Main entry point of the JavaScript frontend application.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
// polyfill for fetch, neccessary until all the browsers support it
// https://github.com/github/fetch
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import App from "./containers/App";
import Teams from "./containers/Teams";
import Hackers from "./containers/Hackers";
import Achievements from "./containers/Achievements";
import Schedule from "./containers/Schedule";
import fetchData from "./util/fetchData";
import rootReducer from "./reducers";
import config from "./config";
import fetchScoresAction from "./actions/fetchScores";
import updateLeaderboardsSaga from "./sagas/updateLeaderboards";

const container = document.getElementById("app");
const sagaMiddleware = createSagaMiddleware();

// Needed for onTouchTap
injectTapEventPlugin();

// Polyfill for Array.prototype.find, which is not supported by Android stock browser
if (!Array.prototype.find) {
    console.log("polyfilling Array.prototype.find");
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw new TypeError("Array.prototype.find called on null or undefined");
        }
        if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
        }
        const list = Object(this);
        const length = list.length >>> 0;
        const thisArg = arguments[1];
        let value;

        for (let i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

console.log(`environment: ${process.env.NODE_ENV}`);
console.log(`service URL: ${config.serviceUrl}`);

fetchData(config.serviceUrl, "all").then(({ teams, hackers, achievements }) => {
    const store = createStore(
        rootReducer,
        {
            teams,
            hackers,
            achievements,
            messages: {
                achievementUnlocked: null
            }
        },
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(updateLeaderboardsSaga, store.getState);
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Teams} />
                        <Route path="/teams" component={Teams} />
                        <Route path="/hackers" component={Hackers} />
                        <Route path="/achievements" component={Achievements} />
                        <Route path="/schedule" component={Schedule} />
                    </Route>
                </Router>
            </MuiThemeProvider>
        </Provider>,
        container
    );

    setInterval(() => store.dispatch(fetchScoresAction()), config.updateInterval);
});

