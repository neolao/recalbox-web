#!/bin/bash

version=1.0.0

wget https://github.com/neolao/recalbox-web/releases/download/$version/recalbox-web-$version.tar.xz

mkdir web
xz -c -d recalbox-web-$version.tar.xz | tar -x -v -C web -f -

cd web
./scripts/clean-pm2.sh
./start.sh

