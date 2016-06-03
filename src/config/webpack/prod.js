/**
 * prod.js
 *
 * Production configuration for webpack module bundler.
 *
 * Note we are not using ES6 modules here so that the config can be used from the webpack CLI tool
 * directly, without running through Babel first.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 08 Apr 2016
 */
const base = require("./base");
const path = require("path");
const webpack = require("webpack");

const prod = Object.assign({}, base, {
    output: {
        filename: path.resolve(__dirname, "../../../public/js/bundle.js")
    }
});
prod.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));
prod.plugins.push(new webpack.DefinePlugin({
    "process.env.NODE_ENV": "\"production\""
}));
prod.module.loaders.push({
    test: /\.scss$/,
    loaders: [
        "style",
        "css?modules",
        "postcss",
        "sass"
    ]
});

module.exports = prod;
