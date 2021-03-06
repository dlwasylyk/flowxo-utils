'use strict';

// A lightweight logger, with partial API compatibility
// with winston.
// Note that this does not support setting levels, etc.
// It is a simple wrapper around console.log, that logs everything out.

var log = function() {
  exports.on && console.log.apply(console, arguments);
};

exports.log = function() {
  // Shift the first argument, which is 'info', 'debug' etc.
  exports.on && log.apply(null, Array.prototype.slice.call(arguments, 1));
};

exports.silly = log;
exports.debug = log;
exports.verbose = log;
exports.info = log;
exports.warn = log;
exports.error = log;
exports.on = false;
