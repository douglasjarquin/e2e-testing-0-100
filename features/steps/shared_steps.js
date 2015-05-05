var sharedSteps = function() {

  this.World = require('../worlds/protractor.js').World;

  this.Given(/^I am on the homepage$/, function (callback) {

    browser.driver.get('https://www.zumba.com/en-US/').then(function() {

      browser.driver.getTitle().then(function(title) {

        this.expect(title).to.equal('Zumba - Ditch the Workout, Join the Party');

        callback();

      }.bind(this));
    }.bind(this));

  });

  this.When(/^I browse to find a class$/, function (callback) {

    browser.driver.findElement(by.linkText('Find a Class')).click().then( function () {

      callback();

    }.bind(this));

  });

  this.Then(/^I should see classes within (\d+) miles of my area$/, function (radius, callback) {

    var radius = radius;

    browser.driver.findElement(by.css('h3.sub-sub-head')).getText().then( function (message) {

      this.assert.equal(message, 'Classes within ' + radius + ' miles of your area');
      callback();

    })

  });

};

module.exports = sharedSteps;
