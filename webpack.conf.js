const path = require('path')
const DotEnv = require('dotenv-webpack')

module.exports = (env, argv) => {
  const envPath = env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : '.env.dev'

  return {
    mode: 'production',
    entry: './src/index.js',
    watch: true,
    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename: 'index.js'
    },
    plugins: [
      new DotEnv({
        path: envPath
      })
    ]
  }
}
