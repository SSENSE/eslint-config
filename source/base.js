module.exports = {
  extends: ["airbnb-base"],

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ["import", "fp"],
  env: {
    mocha: true
  },
  rules: {

    // Misc

    semi: [1, "never"],
    quotes: [1, "double"],
    "comma-dangle": [1, "only-multiline"],
    "no-multiple-empty-lines": [1, { max: 3 }],

    // Import

    "import/no-namespace": 1,
    "import/no-commonjs": 1,
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: [
          "**/*.test.js",
          "**/*.spec.js",
        ],
      },
    ],
    "import/order": [
      1,
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "never",
      },
    ],

    // Functional Programming

    "fp/no-arguments": 2,
    "fp/no-class": 2,
    "fp/no-delete": 2,
    "fp/no-events": 2,
    "fp/no-get-set": 2,
    "fp/no-let": 2,
    "fp/no-loops": 2,
    "fp/no-this": 2,

    // Disable

    "space-before-function-paren": 0,
    "operator-linebreak": 0,
    "object-curly-spacing": 0,
    "no-nested-ternary": 0,

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