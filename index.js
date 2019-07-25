const level = require('level');
const { fromEvent } = require('rxjs');

async function main () {
  const db = level('browserify-starter');
  const output = document.getElementById('output');

  await db.put('beep', 'boop');
  output.textContent = await db.get('beep');

  // grab button reference
  const button = document.getElementById('myButton');

  // create an observable of button clicks
  const myObservable = fromEvent(button, 'click');
}

main();
