var baseRules = require('./base');
var rules = Object.assign(baseRules, {
  'react/jsx-quotes': 0,
  'react/sort-comp': 0, // enable when https://github.com/yannickcr/eslint-plugin-react/issues/128 is fixed
});

module.exports = {
  extends: 'airbnb',
  rules: rules
}
