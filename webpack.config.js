const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'development',
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
    title: 'Development',
    template: 'client/index.html'
  })],
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname) 
    }
  }
};
