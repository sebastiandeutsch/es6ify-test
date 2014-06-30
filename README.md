Having a strange `Uncaught ReferenceError: $traceurRuntime is not defined`. Start a server (maybe with Python in the build directory):

    cd build
    python -m SimpleHTTPServer

Try:

    node browserify.js

Then test localhost:8000
All works. Console output in the browser: "The monster attacks bar"

    node watchify.js

Yields the exception that $traceurruntime is missing.

Any ideas?

Observations:

The shim is in the generated application.js. It's just not required right away?
