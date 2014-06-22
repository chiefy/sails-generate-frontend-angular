/**
 * Module dependencies
 */

var bower = require('bower'),
    fs = require('fs');

module.exports = function after(scope, cb) {
    bower.commands
        .install(null, {}, {
            cwd: scope.rootPath
        })
        .on('end', function() {
            console.log('Bower done installing components!');
            fs.renameSync(fs.realpathSync(scope.rootPath + '/bower_components'), scope.rootPath + '/assets/vendor');
            cb();
        })
        .on('error', function(err) {
            console.error('Bower error: ' + err);
        });
};