module.exports = {
  extends: [
    './source/base',
    './source/client',
  ].map(require.resolve),
}
