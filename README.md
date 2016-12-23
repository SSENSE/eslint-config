# eslint-config-ssense

JavaScript code standards at SSENSE

## Rules

TODO

## Installation
```
npm install --save-dev eslint eslint-config-ssense
```

Because of the [current inability for sharable configs](https://github.com/eslint/eslint/issues/3458) to supply their dependencies you will also need to:

```
npm install --save-dev \
  babel-eslint \
  eslint-config-airbnb-base \
  eslint-plugin-import \
  eslint-plugin-fp \
  eslint-plugin-vue
```


## Usage

Simply put the following in your `package.json` ([see official docs for more information](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)).

```
  "eslintConfig": {
    "extends": "ssense"
  }
```


## Plugins / Extends

* Extends the [AirBnB rules](https://github.com/airbnb/javascript)

* Uses plugin [`import`](https://github.com/benmosher/eslint-plugin-import)

  Provides rules that help prevent import bugs and enforces style.

* Uses plugin [`fp`](https://github.com/jfmengels/eslint-plugin-fp)

  Provides rules that help enforce functional programming.

* Uses plugin [`vue`](https://github.com/vuejs/eslint-plugin-vue)

  Currently, the sole purpose of having this plugin is to parse [`.vue` files](https://vuejs.org/v2/guide/single-file-components.html). Also, it [does not support eslint's `--fix` feature](https://github.com/vuejs/eslint-plugin-vue/issues/1).
