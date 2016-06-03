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
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import injectTapEventPlugin from "react-tap-event-plugin";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./containers/App";
import fetchData from "./util/fetchData";
import rootReducer from "./reducers";
import config from "./config";
import fetchHackersAction from "./actions/fetchHackers";
import fetchHackersSaga from "./sagas/fetchHackers";

const container = document.getElementById("app");
const sagaMiddleware = createSagaMiddleware();

// Needed for onTouchTap
injectTapEventPlugin();

fetchData(config.serviceUrl, "hackers").then(hackers => {
    const store = createStore(
        rootReducer,
        {
            hackers
        },
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(fetchHackersSaga);
    render(App, store);

    // Whenever a new version of App.js is available, require the new version and render it instead
    // https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.eqko7slb2
    if (module.hot) {
        module.hot.accept("./containers/App", () =>
            render(require("./containers/App").default, store)
        );
    }

    setInterval(() => store.dispatch(fetchHackersAction()), config.updateInterval);
});

function render(RootElement, store) {
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <RootElement />
            </MuiThemeProvider>
        </Provider>,
        container
    );
}
