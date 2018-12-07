'use strict';

const express = require('express');

module.exports = function(dependencies, lib) {

  const router = express.Router();

  require('./travel-request')(dependencies, lib, router);
  require('./mock')(dependencies, router);

  return router;
};
