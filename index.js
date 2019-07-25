const fs = require('fs');
const browserify = require('browserify');
const watchify = require('watchify');

const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

function runBuild() {
  function bundle() {
    b.bundle()
      .on('error', console.error)
      .pipe(fs.createWriteStream('public/bundle.js'))
    ;
  }

  const b = browserify({
    entries: ['src/index.js'],
    cache: {},
    packageCache: {},
    plugin: [watchify]
  });

  b.on('update', bundle);
  bundle();

}

function runStaticServer() {
  // Serve up public/ftp folder
  const serve = serveStatic('public', { 'index': ['index.html'] })

  // Create server
  const server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res))
  })

  // Listen
  server.listen(9090)
}

runBuild();
runStaticServer();
