#!/bin/sh
ROOT="$(dirname "$(dirname "$(readlink -fm "$0")")")"
SELF_DIR="$(dirname "$(readlink -fm "$0")")"
#echo $ROOT
#echo $SELF_DIR
# build ext-js theme
cd  "$ROOT/web/theme/packages/local/eco"
sencha package build


# ensure webpack installed
#cd "$ROOT"
#npm install --save-dev  webpack node-sass sass-loader file-loader url-loader css-loader script-loader style-loader 
#npm install --save-dev extract-text-webpack-plugin
# build web
#cd "$ROOT/web/Front/"
#echo "$ROOT/web/Front/"
cd "$ROOT/web/Front";
#echo "$ROOT/node_modules/webpack/bin/"
node "$ROOT/node_modules/webpack/bin/webpack.js"
