#!/usr/bin/env bash

# Creates the webpack JavaScript bundle which contains the whole frontend code.
# Executed by npm when you issue the command “npm install”.
# You can also execute it without doing a whole npm install with “npm run postinstall”.

set -e

echo -e "\e[35m==========================\e[0m"
echo -e "\e[35mCREATING JAVASCRIPT BUNDLE\e[0m"
echo -e "\e[35m==========================\e[0m"

./node_modules/.bin/webpack --config ./src/config/webpack/prod.js

echo ""
echo -e "\xF0\x9F\x91\x8D  \e[32mDone!\e[0m"
echo ""
