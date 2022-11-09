const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  // devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/styles/[name].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, "env-prod.php"), 
          to: "env.php"
        },
      ],
    }),  
  ],
  output: {
    // filename: "[name].[contenthash].js",
    // publicPath: "https://cdn.ludigames.com/ludigames/as-d/",
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: "./",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: "./",
            },
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
});
