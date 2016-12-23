# eslint-config-ssense

JavaScript code standards at SSENSE

## Rules

1. `semi`

  * Refactoring is harder
    The act of changing/moving code  is made tedious by constantly baby sitting removal/addition of semicolons. For example: transitioning between `() => (...)` / `() => {...}`, moving the last `.then`/`.catch`/ `.foo` in a pipeline up or appending to it, etc..
  * Read/Write is harder
    JavaScript is a syntactically verbose language. Semicolons make it worse yet. Reading code with semicolons is objectively more fatiguing than code without given the reduction in visual noise. For writing, a day of coding with semicolons wears more on the fingers/hand than code without.
  * [ASI rules](http://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi)
  * [An open letter to JavaScript leaders regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
  * [JavaScript Semicolon Insertion; Everything you need to know](http://inimino.org/~inimino/blog/javascript_semicolons)
  * [Semicolons in JavaScript are optional](http://mislav.net/2010/05/semicolons/)



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
