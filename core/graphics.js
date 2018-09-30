

let date = new Date();
let revision = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim()

let revisionDate = require('child_process')
  .execSync('git log -1 --date=short --pretty=format:%cd')
  .toString().trim()
// ASCII Art Credit:
// http://www.ascii-code.com/ascii-art/animals/wolves.php
// jscs:disable
const wolf = '\n                     .\n                    / V\\ - Awoooo~!\n                  / `  /\n                 <<   |\n                 /    |\n               /      |  _    _       _  ________       _   \n             /        | | |  | |     | |/ _| ___ \\     | |   \n           /    \\  \\ /  | |  | | ___ | | |_| |_/ / ___ | |_ \n          (      ) | |  | |/\\| |/ _ \\| |  _| ___ \\/ _ \\| __|\n  ________|   _/_  | |  \\  /\\  / (_) | | | | |_/ / (_) | |_ \n<__________\\______)\\__)  \\/  \\/ \\___/|_|_| \\____/ \\___/ \\__|'; // jshint ignore:line
const seperator = '---------------------------------------------------------------------------'; // jshint ignore:line
// jscs:enable
console.log(wolf);
console.log(seperator);
console.log('🐺 🤖 rev ' + revision + ' - ' + revisionDate);
console.log('starting up - ' + date);
console.log(seperator);
