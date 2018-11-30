module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  assetsDir: './assets', // 根据process.env 来控制是否走 CDN
  indexPath: '.html',
  filenameHashing: true,
  pages: {
    customer: {
      entry: 'src/customer.js',
      template: 'public/index.html',
      filename: 'customer.html',
      title: 'DMall 买家端',
    },
    seller: {
      entry: 'src/customer.js',
      template: 'public/index.html',
      filename: 'seller.html',
      title: 'DMall 卖家端',
    },
    admin: {
      entry: 'src/admin.js',
      template: 'public/index.html',
      filename: 'admin.html',
      title: 'DMall 管理端',
    },
  },
  // chainWebpack: (wpConfig) => {}, // chainWebpack, 需要的时候开启
  devServer: {
    port: 8999,
  },
};
