/**
 * index.js
 *
 * Main configuration file for the JavaScript frontend code.
 *
 * Note we are not using ES6 modules here so that the config can be used from the webpack CLI tool
 * directly, without running through Babel first.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
module.exports = {
    prod: process.env.NODE_ENV === "prod",
    dev: process.env.NODE_ENV === "development",
    devServerPort: process.env.NODE_PORT || 3000,
    serviceUrl: process.env.NODE_ENV === "production" ?
        "/api" : "http://localhost:8080/api",
    updateInterval: 6000,
    messageDuration: 5000,
    scheduleUpdateInterval: 30000,
    timezone: 2 // UTC + n (2 => CEST)
};
