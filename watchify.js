var watchify = require('watchify');
var es6ify = require('es6ify');
var fs = require('fs');
var source = require('vinyl-source-stream');

var watchPath = "./src/application.js";
var bundlePath = "./build/application.js";

var bundler = watchify(watchPath, { entry: true });
bundler.add(es6ify.runtime);
bundler.transform(es6ify)

var rebundle = function() {
  console.log("rebundle");
  var stream = bundler.bundle({ debug: true});
  stream.on('error', function (err) { console.error(err) });
  stream.pipe(source(watchPath));
  stream.pipe(fs.createWriteStream(bundlePath));
};

bundler.on('update', rebundle);
rebundle();
