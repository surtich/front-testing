module.exports = function () {
  
  this.World = require('../support/world.js').World;

  this.Given("I am on the register page", function (callback) {
    this.browser.get('http://localhost:8080/register.html').then(callback);
  });

  this.When(/^I a fill the "([^"]*)" field with the "([^"]*)" value$/, function (id, value, callback) {
    this.browser.elementById(id).then(function (el) {
      el.type(value, callback);
    });
  });

  this.When(/^I click the "([^"]*)" button$/, function (id, callback) {
    this.browser.elementById(id).then(function (el) {
      el.click();
    });
  });

  this.Then('I see a link to "$url"', function (url, callback) {
    this.browser.waitForElementByCss('a[href*="' + url + '"]', 5000, function (err, el) {
      if (err) {
        callback.fail();
      } else {
        this.browser.quit();
        callback();
      }
    }.bind(this));
  });

};