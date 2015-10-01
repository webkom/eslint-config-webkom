var assign = require('object-assign');
var baseRules = require('./base');
var rules = assign(baseRules, {
  'jsx-quotes': [2, 'prefer-single'],
  'react/sort-comp': 0, // enable when https://github.com/yannickcr/eslint-plugin-react/issues/128 is fixed
});

module.exports = {
  extends: 'airbnb',
  rules: rules
};
