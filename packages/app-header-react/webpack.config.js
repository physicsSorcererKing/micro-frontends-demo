const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

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

  return merge(defaultConfig, {
    externals,
    devServer: {
      port: 9010,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};
