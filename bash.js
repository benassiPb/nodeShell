const curl = require('./curl.js')
const pwd = require('./pwd.js')
const ls = require('./ls.js')
curl()

// pwd()

// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//             const cmd = data.toString().trim();
//     if (cmd === "pwd") {

//         process.stdout.write(process.cwd())
//     } else {
//         process.stdout.write('You typed: ' + cmd);
//     }
//     process.stdout.write('\nprompt > ');
// });