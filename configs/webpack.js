const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfigs = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const path = require("path");

const getDevConfigs = () => ({
  mode: process.env.MODE,
  entry: "./src/main.tsx",
  output: {
    publicPath: process.env.PUBLIC_URL,
  },
  devServer: {
    port: process.env.PORT,
    historyApiFallback: {
      index: "/index.html",
    },
    open: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "platform",
      filename: "remoteEntry.js",
      exposes: {
        "./hooks/useStore": "./src/redux/hooks/useStore.ts",
        "./hooks/useStoreSelector": "./src/redux/hooks/useStoreSelector.ts",
        "./providers/StoreProvider": "./src/redux/providers/StoreProvider.tsx",
      },
      remotes: {
        author: process.env.LMS_AUTHOR_APP_REMOTE_PATH,
        curriculum: process.env.LMS_CURRICULUM_APP_REMOTE_PATH,
      },
      shared: {
        ...packageJson.dependencies,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      //   favicon: "./public/logo.png",
    }),
  ],
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      src: path.resolve(__dirname, "../", "src/"),
    },
    symlinks: true,
  },
});

module.exports = (env) => {
  // const localApps = env.apps.split(",");
  return merge(commonConfigs, getDevConfigs());
};
