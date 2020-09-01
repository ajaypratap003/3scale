const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = (env = {}, argv) => {
  const isProd = argv.mode === 'production';
  const publicPath = isProd
    ? 'http://rhuxd-mfe-3scale.s3-website.us-east-2.amazonaws.com/'
    : "http://localhost:3002/";
  const ssoPath = isProd
    ? 'http://rhuxd-mfe-sso.s3-website.us-east-2.amazonaws.com/'
    : "http://localhost:3001/";

  return {
    entry: "./src/index",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 3002,
    },
    output: {
      publicPath
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        {
          test: /\.(svg|ttf|eot|woff|woff2|jpg|jpeg|png|gif)$/,
          use: 'file-loader',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: !env.prod },
            },
            "css-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new ModuleFederationPlugin({
        name: "threeScale",
        filename: "remoteEntry.js",
        remotes: {
          sso: `sso@${ssoPath}remoteEntry.js`,
        },
        exposes: {
          "./routes": "./src/routes",
        },
        shared: {
          ...deps,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
}
