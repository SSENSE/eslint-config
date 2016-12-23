module.exports = {
  plugins: ["vue"],
  env: {
    browser: true,
  },
  rules: {

    /* Vue.js code makes liberal use of "this" unfortunately. To keep
    developers from having to disable this rule themselves on many modules we
    do it globally for them. This does mean that great care must be taken to
    avoid accidental "this" in non-vue code in project-local utilies,
    server-side, ... */
    "fp/no-this":  0
  }
}
