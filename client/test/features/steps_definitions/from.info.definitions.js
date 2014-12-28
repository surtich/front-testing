var request = require('request');

module.exports = function () {
  this.World = require("../support/world.js").World;

  this.Given(/^I go on the info page with "([^"]*)" userId$/, function (userId, callback) {
    this.visit('http://localhost:8080/info.html?userId=' + userId, callback);
  });

  this.Then(/^I should see "([^"]*)" user info$/, function (userId, callback) {
    var self = this;
    request({
      method: 'GET',
      uri: 'http://localhost:8081/user/testId'
    }, function (error, response, body) {
      if (error) {
        return callback(error);
      }
      self.browser.assert.evaluate("$('#messages').html()", body);
      callback();
    });
    
  });
};