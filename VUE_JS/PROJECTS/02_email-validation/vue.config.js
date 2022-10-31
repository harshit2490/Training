const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
module.exports = { devServer: { proxy: 'http://restapi.adequateshop.com/api/'}};
