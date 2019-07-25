const { test } = require('./test'); // eslint-disable-line
const { fromEvent } = require('rxjs');

async function main () {
  // grab button reference, ok
  const button = document.getElementById('myButton');

  // create an observable of button clicks
  const myObservable = fromEvent(button, 'click');

  // for now, let's just log the event on each click
  const subscription = myObservable.subscribe(event => console.log(event));
}

test();
main();
