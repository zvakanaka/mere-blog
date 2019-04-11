OUT_DIR=dist
JS_OUT_DIR=$OUT_DIR/js
CSS_OUT_DIR=$OUT_DIR/css

# delete OUT_DIR
rm -r $OUT_DIR

#####
# Babel (JS)
# https://old.babeljs.io/docs/plugins/transform-es2015-arrow-functions/
#####
BABEL_PRESETS='--presets minify'
BABEL_PLUGINS='--plugins transform-es2015-arrow-functions'

# create and transpile src js to JS_OUT_DIR
npx babel $BABEL_PRESETS $BABEL_PLUGINS src --out-dir $OUT_DIR

#####
# CSS
#####

# create CSS_OUT_DIR
mkdir -p $CSS_OUT_DIR

# copy src css to CSS_OUT_DIR
cp src/css/* $CSS_OUT_DIR/

#####
# Vendor
#####

# copy vendors
cp bower_components/marked/marked.min.js $JS_OUT_DIR/marked.min.js
cp bower_components/github-markdown-css/github-markdown.css $CSS_OUT_DIR/markdown.css

cp bower_components/rainbow/dist/rainbow.min.js $JS_OUT_DIR/rainbow.min.js
cp bower_components/rainbow/themes/css/github.css $CSS_OUT_DIR/rainbow.css
