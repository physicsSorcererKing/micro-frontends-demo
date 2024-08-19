const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('node:path')
const { VueLoaderPlugin } = require('vue-loader')
const StandaloneSingleSpaPlugin = require('standalone-single-spa-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const { name } = require('./package.json')

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: {
    // use .js instead of .ts, because the types of single-spa-vue is outdated
    app: './src/main.js'
  },

  output: {
    // path: resolve('dist'),
    // filename: '[name].js'
    libraryTarget: 'system',
    devtoolNamespace: name
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{ loader: 'vue-loader' }],
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
        include: [resolve('src')]
      },
      {
        test: /\.svg$/,
        use: ['vue-loader', resolve('src/svg-to-vue.js')]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
        include: [resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new StandaloneSingleSpaPlugin({
      appOrParcelName: name,
      disabled: process.env.STANDALONE_SINGLE_SPA !== 'true'
    })
  ],

  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '@': resolve('src') // Ensure this matches your setup
    }
  },

  devtool: 'source-map',

  devServer: {
    port: 9020,
    hot: true,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
