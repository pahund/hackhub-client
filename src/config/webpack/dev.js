/**
 * dev.js
 *
 * Local development configuration for webpack module bundler.
 *
 * Note we are not using ES6 modules here so that the config can be used from the webpack CLI tool
 * directly, without running through Babel first.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */
const config = require("../");
const base = require("./base");
const path = require("path");
const webpack = require("webpack");

const dev = Object.assign({}, base, {
    output: {
        path: path.resolve(__dirname, "../"),
        publicPath: `http://localhost:${config.devServerPort}/`,
        filename: "bundle.js"
    }
});

dev.entry.push("webpack/hot/only-dev-server");
dev.entry.push(`webpack-dev-server/client?http://localhost:${config.devServerPort}`);
dev.plugins.push(new webpack.HotModuleReplacementPlugin());
dev.plugins.push(new webpack.DefinePlugin({
    "process.env.NODE_ENV": "\"development\""
}));
dev.module.loaders.push({
    test: /\.scss$/,
    loaders: [
        "style",
        "css?modules&localIdentName=[path]-[local]",
        "postcss",
        "sass"
    ]
});
dev.devtool = "#eval-source-map";

module.exports = dev;
