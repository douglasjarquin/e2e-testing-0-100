var chai = require('chai');

var WorldConstructor = function WorldConstructor(callback) {

  var expect = chai.expect;
  var assert = chai.assert;

  var world = {
    // these objects will be available in step definitions
    expect: expect,
    assert: assert
  };

  callback(world); // tell Cucumber we're finished and to use our world object instead of 'this'

};

exports.World = WorldConstructor;
