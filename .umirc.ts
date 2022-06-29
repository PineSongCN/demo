import { defineConfig } from 'umi';
import path from 'path';
// import { routes } from "./config/routes";

export default defineConfig({
  mfsu: {},
  // routes: routes,
  alias: {
  },
  plugins: [],
  title: false,
  devServer: { port: 8000 },
  nodeModulesTransform: { type: 'none' },
  dynamicImport: { loading: '@/Loading' }, // 路由组件按需加载
  mock: false,
  proxy: {
  },
  antd: false,
  locale: {
    default: 'en-US',
    antd: false,
    title: false,
    baseNavigator: false,
    baseSeparator: '-',
  },
  fastRefresh: {},
  extraBabelPlugins: [
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
  ],
  chainWebpack: (config) => {
    // inject style variables into each style files
    config.module
      .rule('less')
      .oneOfs.values()
      .forEach((item) => {
        item
          .use('style-resources-loader')
          .loader('style-resources-loader')
          .options({
            patterns: [path.resolve(__dirname, 'src/assets/style/var.less')],
          })
          .end();
      });
    config.module
      .rule('mjs-rule')
      .test(/.m?js/)
      .resolve.set('fullySpecified', false);
    // Support `.d.ts` extensions to resolve
    config.resolve.extensions.add('.d.ts');
  },
  hash: true,
});
