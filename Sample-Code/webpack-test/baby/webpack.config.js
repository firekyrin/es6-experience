var ExtractTextPlugin = require("extract-text-webpack-plugin");
var hotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var webpack = require("webpack");


module.exports = {
  entry: {
    home: "js/home",
    detail: "js/detail"
  },
  output: {
    path: "assets",
    publicPath: "/static/build/",
    filename: "[name]-[chunkhash].js",
    chunkFilename: "bundle-[chunkhash].js"
  },
  resolve: {
    modulesDirectories: ['.']
  },
  module: {
    loaders: [
      {
	test: /\.css$/,
	loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name]-[contenthash].css"),
    //new hotModuleReplacementPlugin(),
    new CommonsChunkPlugin({
      name: "search-app.chunk",
      chunks: ["search-app-init", "home", "detail", "list"]
    }),
    new CommonsChunkPlugin({
      //minChunks: 3,
      name: "common-app.chunk",
      chunks: ["home", "detail", "search-map", "search-app.chunk", "sell", "about", "blog"]
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
};
