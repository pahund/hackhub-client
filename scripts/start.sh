#!/usr/bin/env bash

# Starts the webpack dev server, which allows you to work on the frontend code with hot reloading.
# Executed by npm when you issue the command “npm start”.

set -e

echo -e "\e[35m===================\e[0m"
echo -e "\e[35mSTARTING DEV SERVER\e[0m"
echo -e "\e[35m===================\e[0m"

node ./src/dev-server.js
