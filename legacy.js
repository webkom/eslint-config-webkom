var assign = require('object-assign');
var baseRules = require('./base');
var rules = assign(baseRules, {
  'object-shorthand': 0
});

module.exports = {
  extends: 'airbnb/legacy',
  rules: rules
};
