/**
 * dev-server.js
 *
 * Starts the webpack dev server for local development.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 08 Apr 2016
 */
const path = require("path");
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const webpackConfig = require("./config/webpack/dev");
const config = require("./config");

const devServerConfig = {
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    contentBase: path.resolve(__dirname, "../public"),
    historyApiFallback: {
        index: `http://localhost:${config.devServerPort}/`
    }
};

const webpackDevServer = new WebpackDevServer(webpack(webpackConfig), devServerConfig);

webpackDevServer.listen(config.devServerPort);
