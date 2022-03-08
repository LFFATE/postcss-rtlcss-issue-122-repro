const postcssRTLCSS = require('postcss-rtlcss')
const postcssNested = require('postcss-nested')

module.exports = {
  plugins: [
    postcssNested(),
    postcssRTLCSS({ mode: 'override'}),
  ]
}
