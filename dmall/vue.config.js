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
    proxy: 'http://119.23.75.180:8080',
    // proxy: 'http://192.168.31.81:8080',
  },
  css: {
    extract: true, // css单独打包出来
    loaderOptions: {
      sass: {
        // TODO: 不知道下面这样的注入会不会注入重复
        // eslint-disable-next-line
        data: `
        @import "@/styles/variables.scss";
        @import "@/styles/common.scss";
        @import "@/styles/mixins.scss";
        `,
      },
    },
  },
};
