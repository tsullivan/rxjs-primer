const fs = require('fs');
const browserify = require('browserify');
const watchify = require('watchify');

const b = browserify({
  entries: ['index.js'],
  cache: {},
  packageCache: {},
  plugin: [watchify]
});

b.on('update', bundle);
bundle();

function bundle() {
  b.bundle()
    .on('error', console.error)
    .pipe(fs.createWriteStream('bundle.js'))
  ;
}
