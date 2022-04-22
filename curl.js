const request = require('request')

module.exports = function() {

    process.stdout.write('prompt > ');
    process.stdin.on('data', (data) => {
        const cmd = data.toString().split(' ');
        if (cmd[0] === "curl") {
            request.post(cmd[1])
        } else {
            process.stdout.write('You typed: ' + cmd);
        }
        process.stdout.write('\nprompt > ');
    })
};