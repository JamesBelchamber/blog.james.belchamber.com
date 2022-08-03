const path = require('path')
const Sass = require('sass')

module.exports = class SassTemplate {
  data() {
    return { permalink: '/assets/main.css' }
  }

  render(data) {
    return Sass.renderSync({
      file: path.join(__dirname, './_assets/sass/main.scss'),
      includePaths: [path.join(__dirname, './node_modules')],
      outputStyle: 'compressed'
    }).css
  }
}
