module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  assetsDir: './assets', // 根据process.env 来控制是否走 CDN
  indexPath: '.html',
  filenameHashing: true, // 加hash，防缓存
  pages: {
    customer: {
      entry: 'src/pages/customers/index.js',
      template: 'public/index.html',
      filename: 'customer.html',
      title: 'DMall 买家端',
    },
    seller: {
      entry: 'src/pages/sellers/index.js',
      template: 'public/index.html',
      filename: 'seller.html',
      title: 'DMall 卖家端',
    },
    admin: {
      entry: 'src/pages/admins/index.js',
      template: 'public/index.html',
      filename: 'admin.html',
      title: 'DMall 管理端',
    },
  },
  // chainWebpack: (wpConfig) => {}, // chainWebpack, 需要的时候开启
  devServer: {
    port: 8000,
    proxy: '', // 用于开发时代理
  },
};
