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

import App from "./containers/App";
import fetchData from "./util/fetchData";
import rootReducer from "./reducers";
import config from "./config";

const container = document.getElementById("app");
const sagaMiddleware = createSagaMiddleware();

fetchData(config.serviceUrl, "hackers").then(hackers => {
    const store = createStore(
        rootReducer,
        {
            hackers
        },
        applyMiddleware(sagaMiddleware)
    );
    // PH_TODO: run middlewares here
    // sagaMiddleware.run(deleteMessages, actionUrls, serviceUrl, folderName);
    render(App, store);

    // Whenever a new version of App.js is available, require the new version and render it instead
    // https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.eqko7slb2
    if (module.hot) {
        module.hot.accept("./containers/App", () =>
            render(require("./containers/App").default, store)
        );
    }
});

function render(RootElement, store) {
    ReactDOM.render(
        <Provider store={store}>
            <RootElement />
        </Provider>,
        container
    );
}
