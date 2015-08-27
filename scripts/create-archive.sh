#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")

cd $currentDirectory/..

tar cvf api.tar \
    package.json \
    start.sh \
    stop.sh \
    LICENSE \
    scripts/ \
    node_modules/.bin \
    node_modules/npm \
    node_modules/pm2
