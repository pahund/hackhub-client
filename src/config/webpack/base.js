/**
 * base.js
 *
 * Base configuration for webpack module bundler. Used by the production configuration (prod.js) and
 * the configuration for local development (dev.js).
 *
 * Note we are not using ES6 modules here so that the config can be used from the webpack CLI tool
 * directly, without running through Babel first.
 *
 * @see src/config/webpack/dev.js
 * @see src/config/webpack/prod.js
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */

const path = require("path");
const autoprefixer = require("autoprefixer");

module.exports = {
    context: path.resolve(__dirname, "../.."),
    entry: [
        "./index.js"
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    "babel"
                ]
            }
        ]
    },
    postcss() {
        return [autoprefixer];
    },
    plugins: []
};
