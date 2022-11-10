const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const webpack = require('webpack');
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
});

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

const all_html = ['index.html','game.html']
module.exports = {
  entry: { // order important
    index: {
      import: ["./src/index.js"],
    },
    game: {
      import: ["./src/game.js"]
    },
 
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "./pages/index.hbs",
      filename: "index.html",
      chunks: ['index'],
    }
    ),
    new HtmlWebpackPartialsPlugin([
      // common
      {
        path: path.join(__dirname, 'src/comp/ui/common/header/container.html'),
        template_filename: all_html,
        location: 'header',
        priority: "replace",
        // options: {
        //   publicPath: "./"
        // },
      },
      {
        path: path.join(__dirname, './src/comp/ui/common/pop-up-header/container.html'),
        template_filename: all_html,
        location: 'cph-pop-up-header',
        priority: "replace",
      },

      {
        path: path.join(__dirname, 'src/comp/ui/common/footer/container.html'),
        template_filename: all_html,
        location: 'footer',
        priority: "replace",
      },
      {
        path: path.join(__dirname, 'src/comp/ui/common/back-to-top/container.html'),
        template_filename: all_html,
        location: 'back-to-top',
        priority: "replace",
      },
      // index      
      {
        path: path.join(__dirname, 'src/comp/ui/common/sample-module/container.html'),
        template_filename: all_html,
        location: 'csm-sample-module',
        priority: "replace",
      },
      // game
      {
        path: path.join(__dirname, './src/comp/ui/game/game/container.html'),
        template_filename: ['game.html'],
        location: 'gg-game',
        priority: "replace",
      },
      

    ]),

    new HtmlWebpackPlugin({
      inject: false,
      template: "./pages/game.hbs",
      filename: "game.html",
      chunks: ['game'],
    }
    ),
    
    new PreloadWebpackPlugin({
      rel: "preload",
      include: {
        type: "initial",
        entries: "index",
        chunks: ["vendors"],
      },
    }),
    /* new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,

      maximumFileSizeToCacheInBytes: 5000000,
    }), */
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
        },
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "action.php"),
        },
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "database"),
          to: "database"
        },
      ],
    }),
    /* new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "includes/texts/new"),
          to: "includes/texts/new"
        },
      ],
    }), */
  ],
  output: {
    filename: "static/js/[name].[contenthash].js",
    assetModuleFilename: 'static/images/[hash][ext][query]',
    path: path.resolve(__dirname, "dist/"),
    // publicPath: "https://cdn.ludigames.com/ludigames/as-d-3/",
    clean: true,
  },
  optimization: {
    moduleIds: "deterministic",
    // runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?[j-t]s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "usage",
                  "corejs": "3.6.5",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: between(1000, 10000),
  },
};
