const { test } = require('./test'); // eslint-disable-line
const { fromEvent } = require('rxjs');

async function main () {
  // grab button reference, ok
  const button = document.getElementById('myButton');

  // create an observable of button clicks
  const myObservable = fromEvent(button, 'click');
}

main();
