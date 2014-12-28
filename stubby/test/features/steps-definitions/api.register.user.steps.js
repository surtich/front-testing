var request = require('request');
var assert = require('assert');
var path = require('path');

//require(path.join('.', '../../../../stubby/server'));

module.exports = function () {
  this.Given(/^a valid "([^"]*)" email$/, function (username, callback) {
    this.username = username;
    callback();
  });

  this.Given(/^a correct "([^"]*)" confirmation email$/, function (email, callback) {
    assert.equal(email, this.username, 'confirm email does not match');
    this.email = email;
    callback();
  });

  this.Then(/^the register should be valid$/, function (callback) {
    var self = this;
    request({
      method: 'POST',
      uri: 'http://localhost:8081/register',
      body: {
        username: this.username,
        email: this.email
      },
      json: true
    }, function (error, response, body) {
      if (error) {
        throw error;
      }
      assert.equal(200, response.statusCode);
      assert.equal(self.username, body.username);
      assert.equal(self.email, body.email);
      callback();
    });
  });

  this.Then(/^the "([^"]*)" user is in the database$/, function (userId, callback) {
    var self = this;
    request({
      method: 'GET',
      uri: 'http://localhost:8081/user/' + userId
    }, function (error, response, body) {
      if (error) {
        throw error;
      }
      assert.equal(200, response.statusCode);
      assert.deepEqual(JSON.parse(body), {
        _id: userId,
        username: self.username,
        email: self.email
      });
      callback();
    });
  });
};