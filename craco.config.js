const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const cloneDeep = require("lodash.clonedeep");
const path = require("path");

module.exports = {
  // If no images/fonts are used in *.css files
  // style: {
  //   css: {
  //     loaderOptions: {
  //       url: false,
  //     },
  //   },
  // },

  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin()],
    },

    configure: (webpackConfig) => {
      // CRA uses two rules, one with "oneOf" that handles all possible file types
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);

      // Then we need to find the rule that handles CSS files
      const cssRule = oneOfRule.oneOf.find(
        (rule) => rule.test instanceof RegExp && rule.test.test("styles.css")
      );

      // We clone the rule before manipulating it
      const vanillaExtractRule = cloneDeep(cssRule);

      // Our new rule should only handle vanilla-extract files
      vanillaExtractRule.test = /\.vanilla\.css$/i;

      // We need to find the css-loader to adjust the options.
      // We disable url handling because that's already done when
      // importing the image file in the *.css.ts file
      const cssLoader = require.resolve("css-loader");
      const loader = vanillaExtractRule.use.find((c) => c.loader === cssLoader);
      loader.options.url = false;

      // Prepend the new rule because
      // the last rule is a generic file loader and
      // it must come before the existing CSS loader which
      // handles all CSS files.
      oneOfRule.oneOf.unshift(vanillaExtractRule);

      const moduleScopePlugin = webpackConfig.resolve.plugins.find(
        (plugin) => plugin instanceof ModuleScopePlugin
      );
      moduleScopePlugin.allowedPaths.push(
        path.resolve(__dirname, "node_modules/@vanilla-extract/webpack-plugin")
      );

      return webpackConfig;
    },
  },
  babel: {
    plugins: ["@vanilla-extract/babel-plugin"],
  },
};
