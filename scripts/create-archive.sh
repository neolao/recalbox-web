#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")

cd $currentDirectory/..

tar cvf web.tar \
    package.json \
    start.sh \
    stop.sh \
    LICENSE \
    scripts/ \
    web/ \
    node_modules/.bin \
    node_modules/npm \
    node_modules/pm2

xz --compress --verbose --extreme web.tar
