const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

const config = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "psk",
    projectName: "styleguide",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["postcss-loader"],
        },
      ],
    },
    devServer: {
      port: 9002,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};

module.exports = config;
