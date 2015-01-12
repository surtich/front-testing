module.exports = function () {
  this.World = require("../support/world.js").World;

  this.Given(/^I am on the register page$/, function (callback) {
    this.visit('http://localhost:8080/register.html', callback);
  });

  this.When(/^I a fill "([^"]*)" email$/, function (email, callback) {
    this.browser.fill(this.browser.query('#username'), email);
    callback();
  });

  this.When(/^I a fill "([^"]*)" confirm email$/, function (confirmEmail, callback) {
    this.browser.fill(this.browser.query('#email'), confirmEmail);
    callback();
  });

  this.Then(/^I should see "([^"]*)" message$/, function (message, callback) {
    var self = this;
    this.browser.pressButton(this.browser.query('#register'), function (error) {
      self.browser.assert.evaluate("$('#messages').html()", message);
      callback(error);
    });
  });

  this.Then(/^A iframe is opened with the user information$/, function (callback) {
    this.browser.assert.evaluate("$('#infoWindow').contents().find('#messages').html()", /\{.*\"?_id\"? ?:.*\}/);
    callback ();
  });
};
