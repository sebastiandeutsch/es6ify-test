var browserify = require('browserify');
var es6ify = require('es6ify');
var fs = require('fs');
var bundlePath = "./build/application.js";

browserify()
  .add(es6ify.runtime)
  .transform(es6ify)
  .require(require.resolve('./src/application.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundlePath));
