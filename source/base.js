module.exports = {
  extends: [
    "airbnb-base",
    "plugin:flowtype/recommended"
  ],

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ["import", "fp", "flowtype"],
  env: {
    mocha: true,
    jest: true,
  },
  rules: {

    // Disable rules handled by prettier

    "arrow-parens": 0,
    "indent": 0,
    "max-len": 0,
    "no-trailing-spaces": 0,
    "no-multiple-empty-lines": 0
    "semi": 0,
    "quotes": 0,
    "comma-dangle": 0,
    "no-multiple-empty-lines": 0
    "space-before-function-paren": 0,
    "space-before-blocks": 0,
    "operator-linebreak": 0,
    "object-curly-spacing": 0,
    "no-nested-ternary": 0,
    "keyword-spacing": 0,
    "space-infix-ops": 0,
    "eol-last": 0,
    "newline-per-chained-call": 0,
    "padded-blocks": 0,
    "space-in-parens": 0,
    "array-bracket-spacing": 0,
    "comma-style": 0,

    // Import

    "import/no-commonjs": 1,
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: ["**/*.test.js", "**/*.spec.js"],
      },
    ],
    "import/order": [
      1,
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
      },
    ],

    // Functional Programming

    "fp/no-arguments": 1,
    "fp/no-class": 1,
    "fp/no-delete": 1,
    "fp/no-events": 1,
    "fp/no-get-set": 1,
    "fp/no-loops": 1,
    "fp/no-this": 1,

    // Consider

    // fp/no-mutating-assign: 2
    // fp/no-mutating-methods: 2
    // fp/no-mutation: 2
    // fp/no-nil: 2
    // fp/no-rest-parameters: 2
    // fp/no-throw: 2
    // https://github.com/jfmengels/eslint-plugin-lodash-fp
    // https://github.com/xjamundx/eslint-plugin-promise
    // https://github.com/johnstonbl01/eslint-no-inferred-method-name
    // https://github.com/selaux/eslint-plugin-filenames
    // https://github.com/gajus/eslint-plugin-jsdoc
  },
}
