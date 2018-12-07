module.exports = function(dependencies) {

  const models = require('./db')(dependencies);
  const config = require('./config')(dependencies);

  return {
    models,
    config
  };
};
