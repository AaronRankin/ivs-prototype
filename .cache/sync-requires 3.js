const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/aaronrankin/Documents/GitHub/ivs-prototype/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/aaronrankin/Documents/GitHub/ivs-prototype/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/aaronrankin/Documents/GitHub/ivs-prototype/src/pages/about.js"))),
  "component---src-pages-application-received-js": hot(preferDefault(require("/Users/aaronrankin/Documents/GitHub/ivs-prototype/src/pages/application-received.js"))),
  "component---src-pages-apply-js": hot(preferDefault(require("/Users/aaronrankin/Documents/GitHub/ivs-prototype/src/pages/apply.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/aaronrankin/Documents/GitHub/ivs-prototype/src/pages/index.js")))
}

