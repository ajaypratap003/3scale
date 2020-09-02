const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const { dependencies, port } = require("./package.json");
delete dependencies.serve; // Needed for nodeshift bug

// Don't include PatternFly styles twice
const reactCSSRegex = /(react-[\w-]+\/dist|react-styles\/css)\/.*\.css$/;

module.exports = (env = { ssoPort: 3001 }, argv) => {
  const isProd = argv.mode === 'production';
  const { remoteSuffix } = env;
  const publicPath = (isProd && remoteSuffix)
    ? `http://three-scale-${remoteSuffix}/`
    : `http://localhost:${port}/`;
  const ssoPath = (isProd && remoteSuffix)
    ? `http://single-sign-on-${remoteSuffix}/`
    : `http://localhost:${env.ssoPort}/`;

  return {
    entry: "./src/index",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port
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
          exclude: reactCSSRegex,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: !env.prod },
            },
            "css-loader",
          ],
        },
        {
          test: reactCSSRegex,
          use: 'null-loader'
        }
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
          "./Page": "./src/components/Page",
        },
        shared: {
          ...dependencies,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: dependencies.react,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
}
