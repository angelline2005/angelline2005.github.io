const path = require("path");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, "env-dev.php"), 
          to: "env.php"
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
});
