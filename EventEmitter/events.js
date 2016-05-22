'use strict';

api.events = require('events');
var eventEmitter = require('./emitter.js');

global.enhancedEventEmitter = function() {
  var ee = new eventEmitter(),
      emit = ee.emit;
  ee.emit = function() {
    var args = [];
    Array.prototype.push.apply(args, arguments);
    args.unshift('*');
    emit.apply(ee, args);
    emit.apply(ee, arguments);
  };
  return ee;
};

module.exports = enhancedEventEmitter;