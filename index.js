module.exports = {
  extends: [
    './source/base',
    './source/server',
  ].map(require.resolve),
}
