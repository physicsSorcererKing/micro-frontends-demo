const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

require("dotenv").config();

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "psk";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(
    defaultConfig,
    {
      // modify the webpack config however you'd like to by adding to this object
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: "src/index.ejs",
          templateParameters: {
            ...process.env,
            isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
            orgName,
          },
        }),
      ],
    },
    {
      devServer: {
        port: 9000,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    },
  );
};
