var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var srcPath = path.join(__dirname, '/base/assets/scripts/app/');
var dstPath = path.join(__dirname, '/base/assets/scripts/app/build/');

var entry = path.join(srcPath, 'app.module.es6')

var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Plugins
var extractSass = new ExtractTextPlugin({
  filename: "css/main.bundle.css"
});
var bundleVendor = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'js/vendor.bundle.js'
});
var jqueryProvider = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  Popper: ['popper.js', 'default'],
})

module.exports = {
    context: srcPath,
    entry: {
      app: entry,
      vendor: ['jquery', 'angular', 'bootstrap', ]
    },
    output: {
        path: dstPath,
        filename: "js/app.bundle.js"
    },

    plugins: [
        bundleVendor,
        extractSass,
        jqueryProvider
    ],

    watch: true,

    module: {
        rules: [
          // HTML
          {
            test: /\.html$/,
            loader: 'html-loader'
          },

          // Stylesheets
          {
              test: /\.(scss|sass|css)$/,
              use: extractSass.extract({
                  use: [{
                      loader: "css-loader"
                  }, {
                      loader: "sass-loader"
                  }],
                  // use style-loader in development
                  fallback: "style-loader"
              })
          },

          // Fonts
          {
            test: /\.(ttf|eot|woff|woff2|svg)$/,
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: '../'
            },
          },

          // copy assets to output
          {
            test: /\.(png|jpe?g|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            query: {
              name: 'images/[name].[ext]',
              publicPath: '../'
            }
          },

          // ES6 Support
          {
            test: /\.es6$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'angular2-template-loader?useAbsoluteUrls=true'
              },
              {
                loader: 'ng-annotate-loader'
              },
              {
                loader: 'babel-loader',
                options: {
                  plugins: ['transform-runtime']
                }
              },
            ],
          },
        ] // end rules
    },
};
