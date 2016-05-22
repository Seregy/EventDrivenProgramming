'use strict';

global.api = {};
var enhancedEmitter = require('./events.js');

global.application = new enhancedEmitter();

application.on('smth', function(data) {
  console.dir(data);
});

application.on('*', function(name, data) {
  console.dir([name, data]);
});

application.emit('smth', { a: 5 });
