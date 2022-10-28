const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin(),
      require('unplugin-vue-components/webpack')({
        include: 'MainSumaryTable',
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
