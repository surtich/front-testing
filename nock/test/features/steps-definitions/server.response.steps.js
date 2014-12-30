var request = require('request');
var assert = require('assert');
var path = require('path');

require(path.join('.', '../../../../nock/server'));

module.exports = function () {

  this.Then(/^a "([^"]*)" code response is obtained with the "([^"]*)" message$/, function (code, message, callback) {
    request({
      method: 'POST',
      uri: 'http://myapp/register',
      body: {
        username: this.username,
        email: this.email
      },
      json: true
    }, function (error, response, body) {
      if (error) {
        throw error;
      }
      assert.equal(code, response.statusCode);
      assert.equal(message, body.message);
      callback();
    });
  });
};