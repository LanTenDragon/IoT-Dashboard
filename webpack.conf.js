const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'index.js'
  }
}
