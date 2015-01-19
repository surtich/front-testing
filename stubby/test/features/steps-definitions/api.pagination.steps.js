var request = require('request');
var assert = require('assert');
var path = require('path');


module.exports = function () {

  var self;

  this.Given(/^There is multiple client pages$/, function (callback) {
    request({
      method: 'PUT',
      uri: 'http://localhost:8889/3',
      body: {
        request: {
          url: '/client',
          method: 'GET'
        },
        response: {
          status: 200,
          body: [
              {_id: 'client1Id', name: 'client1Name'},
              {_id: 'client2Id', name: 'client2Name'},
              {_id: 'client3Id', name: 'client3Name'},
              {_id: 'client4Id', name: 'client4Name'},
              {_id: 'client5Id', name: 'client5Name'}
          ]
        }
      },
      json: true
    }, function (error, response, body) {
      if (error) {
        throw error;
      }
      assert.equal(204, response.statusCode);
      callback();
    });
  });

  this.When(/^I ask for de "([^"]*)" client page$/, function (page, callback) {
    self = this;
    request({
      method: 'GET',
      uri: 'http://localhost:8081/client?page=1'
    }, function (error, response, body) {
      if (error) {
        throw error;
      }
      assert.equal(200, response.statusCode);
      self.body = JSON.parse(body);
      callback();
    });
  });

  this.Then(/^I get the "([^"]*)" client page$/, function (page, callback) {
    assert.equal(5, this.body.length);
    callback();
  });
};
