module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // target: 'http://54.210.254.103:8080',
        // changeOrigin: true,
        // pathRewrite: {
        //   '^/': ''
        // }
      }
    }
  }
}
