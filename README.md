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

#### ES6:
1. `npm install --save-dev eslint-config-airbnb eslint-config-webkom babel-eslint`
2. Add `"extends": "webkom"` and `"parser": "babel-eslint"` to your .eslintrc

Example:
```json
{
  "extends": "webkom",
  "parser": "babel-eslint"
}
```

#### ES5:
1. `npm install --save-dev eslint-config-airbnb eslint-config-webkom`
2. ES5: Add `"extends": "webkom/legacy"` to your .eslintrc

### With React

1. `npm install --save-dev eslint-config-airbnb eslint-config-webkom babel-eslint eslint-plugin-react`
2. add `"extends": "webkom/react"` to your .eslintrc

## Airbnb changes
See `base.js`, `react.js` and `legacy.js` for the rule changes from
default Airbnb.

## License

MIT
