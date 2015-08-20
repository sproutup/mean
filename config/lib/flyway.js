'use strict';

var exec = require('child_process').exec;

// migrates
module.exports.migrate = function () {
  exec('flyway --help',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {                                    console.log('exec error: ' + error);
      }
  });
};


