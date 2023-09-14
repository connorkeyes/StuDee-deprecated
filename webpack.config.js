const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './client/index.js',
    cards: './client/index1.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { targets: 'defaults' }]
            ]
          }
        }
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Login',
    filename: 'index.html',
    template: 'client/index.html',
    chunks: ['main']
  }),
  new HtmlWebpackPlugin({
    title: 'Cards',
    filename: 'cards.html',
    template: 'client/cards.html',
    chunks: ['cards']
  })],
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname) 
    }
  }
};
