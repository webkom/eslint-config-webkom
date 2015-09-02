# eslint-config-webkom

This package provides Webkom's version of
[Airbnb's .eslintrc](https://github.com/airbnb/javascript/)
as an extensible shared config. Note that eslint-config-webkom
**only** works with ES6 projects that use Babel.

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESLint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Usage

### Without React

1. `npm install --save-dev eslint-config-airbnb eslint-config-webkom babel-eslint`
2. add `"extends": "webkom"` to your .eslintrc

### With React

1. `npm install --save-dev eslint-config-airbnb eslint-config-webkom babel-eslint eslint-plugin-react`
2. add `"extends": "webkom/react"` to your .eslintrc

## Airbnb changes
See `base.js` and `react.js` for the rule changes from
default Airbnb.

## License

MIT
