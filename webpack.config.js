const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    }
                }
            ]
        },
        {
            test: /\.(png|jkpe?g|gif|svg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: 'images'
                    }
                }
            ]
        }   ,
        {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: 'fonts'
                    }
                }
            ]
        }
    ]   
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "main.css"
      })
  ]
};