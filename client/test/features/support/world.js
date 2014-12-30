var path = require('path');

var nock = require(path.join('.', '../../../../nock/server'));
  
var zombie = require('zombie');
var WorldConstructor = function WorldConstructor(callback) {

  var browser = new zombie();
  var world = {
    browser: browser,
    visit: function (url, callback) {
      this.browser.visit(url, callback);
    }
  };

  callback(world);
};
exports.World = WorldConstructor;