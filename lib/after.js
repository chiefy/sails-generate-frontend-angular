/**
 * Module dependencies
 */

var bower = require('bower');

module.exports = function after(scope, cb) {
    bower.commands.install(null, {}, {
        cwd: scope.rootPath
    })
        .on('end', function(installed) {
            console.log('Bower done installing components!');
            cb();
        })
        .on('error', function(err) {
            console.error('Bower error: ' + err);
        });
};