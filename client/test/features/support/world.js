var path = require('path');
//var nock = require(path.join('.', '../../../../nock/server'));

require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

var wd = require('wd');

var browser = wd.promiseRemote();

// optional extra logging
browser.on('status', function(info) {
  console.log(info.cyan);
});
browser.on('command', function(eventType, command, response) {
  console.log(' > ' + eventType.cyan, command, (response || '').grey);
});
browser.on('http', function(meth, path, data) {
  console.log(' > ' + meth.magenta, path, (data || '').grey);
});

var World = function World(callback) {
  this.browser = browser;

  // run the callback when we are done do cucumber knows we are ready
  this.browser.init({browserName: 'chrome'}, function() {
    callback();
  });
};

exports.World = World;