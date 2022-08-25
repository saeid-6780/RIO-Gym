// vue.config.js
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  },
};
