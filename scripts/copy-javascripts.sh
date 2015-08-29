#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")
cd $currentDirectory/..

moduleFoundation=node_modules/foundation-sites
moduleReact=node_modules/react
moduleReactRouter=node_modules/react-router
javascripts=web/javascripts

cp -v $moduleFoundation/js/foundation.min.js    $javascripts/vendor/
cp -v $moduleFoundation/js/vendor/modernizr.js  $javascripts/vendor/
cp -v $moduleFoundation/js/vendor/fastclick.js  $javascripts/vendor/
cp -v $moduleFoundation/js/vendor/jquery.js     $javascripts/vendor/
cp -v $moduleReact/dist/react.min.js            $javascripts/vendor/
cp -v $moduleReactRouter/umd/ReactRouter.min.js $javascripts/vendor/

