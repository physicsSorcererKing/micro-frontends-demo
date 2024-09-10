const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("node:path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "psk",
    projectName: "app-header-react",
    webpackConfigEnv,
    argv,
  });

  const externals = [];

  if (webpackConfigEnv.standalone) {
    externals.push("react", "react-dom");
  }

  const resultConfig = merge(defaultConfig, {
    externals,
    module: {
      rules: [
        {
          test: /\.css$/i,
          include: [/node_modules/, /src/],
          exclude: [/\.module\.css$/],
          use: ["postcss-loader"],
        },
      ],
    },
    devServer: {
      port: 9010,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });

  console.log(resultConfig.module.rules);
  return resultConfig;
};
