const prefixer = require('postcss-prefix-selector')

module.exports = {
  plugins: [
    prefixer({
      prefix: '#single-spa-application\\:\\@psk\\/app-nav-vue',
      transform: (prefix, selector, prefixedSelector, filePath, rule) => {
        if (selector.match(/^(html|body|:root)/)) {
          return selector.replace(/^([^\s]*)/, `$1 ${prefix}`)
        }

        if (filePath.match(/node_modules/)) {
          return selector // Do not prefix styles imported from node_modules
        }

        const annotation = rule.prev()
        if (annotation?.type === 'comment' && annotation.text.trim() === 'no-prefix') {
          return selector // Do not prefix style rules that are preceded by: /* no-prefix */
        }

        return prefixedSelector
      }
    })
  ]
}
