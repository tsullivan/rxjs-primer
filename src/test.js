const level = require('level');

async function test() {
  const db = level('learnrxjs');
  const output = document.getElementById('output');

  await db.put('beep', 'boooooep');
  output.textContent = await db.get('beep');
}

module.exports = {
  test
};