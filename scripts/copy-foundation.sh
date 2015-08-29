#!/bin/sh

currentDirectory=$(dirname "$PWD/$0")
cd $currentDirectory/..

module=node_modules/foundation-sites
javascripts=web/javascripts
cp -v $module/js/foundation.min.js     $javascripts/
cp -v $module/js/vendor/modernizr.js   $javascripts/vendor/
cp -v $module/js/vendor/fastclick.js   $javascripts/vendor/
cp -v $module/js/vendor/jquery.js      $javascripts/vendor/

