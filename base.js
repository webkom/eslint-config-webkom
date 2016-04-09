module.exports = {
  'no-console': 0, // http://eslint.org/docs/rules/no-console.html
  'no-unused-vars': [2, { // http://eslint.org/docs/rules/no-unused-vars.html
    args: 'none'
  }],
  'comma-dangle': [2, 'never'], // eslint.org/docs/rules/comma-dangle.html
  'default-case': 0, // http://eslint.org/docs/rules/default-case.html,
  'id-length': 0,
  'func-names': 0,
  'object-curly-spacing': [2, 'always'],
  'object-shorthand': [2, 'always'],
  'no-const-assign': 2,
  'arrow-parens': [2, 'as-needed'],
  'arrow-spacing': [2, { before: true, after: true }],
  'prefer-spread': 2,
  'constructor-super': 2,
  'space-before-function-paren': [2, 'never'],
  'no-param-reassign': [2, { props: false }],
  'no-confusing-arrow': 0,
  'new-cap': [2, {
    capIsNewExceptions: [
      'Router',
      'Before',
      'BeforeFeatures',
      'AfterFeatures',
      'Then',
      'When',
      'Given'
    ]
  }]
};
