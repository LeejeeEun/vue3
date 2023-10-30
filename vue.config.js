module.exports = {
  devServer: {
    proxy: {
      '/api': {
         // target: 'http://localhost:8080',
        target: 'http://54.210.254.103:8080', // /api로 시작하는 요청 시 프론트엔드가 해당 요청을 백엔드 서버 주소로 전달
        // changeOrigin: true,
        // pathRewrite: {
        //   '^/': ''
        // }
      }
    }
  }
}
