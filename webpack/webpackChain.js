const Config = require('webpack-chain');
class CleanPlugin {}

const config = new Config()

config
  // 修改 entry 配置
  .entry('index')
    .add('src/index.js')
    .end()
  // 修改 output 配置
  .output
    .path('dist')
    .filename('[name].bundle.js');

// 创建一个具名规则，以后用来修改规则
config.module
  .rule('lint')
    .test(/\.js$/)
    .pre()
    .include
      .add('src')
      .end()
    // 还可以创建具名use (loaders)
    .use('eslint')
      .loader('eslint-loader')
      .options({
        rules: {
          semi: 'off'
        }
      });

config.module
  .rule('compile')
    .test(/\.js$/)
    .include
      .add('src')
      .add('test')
      .end()
    .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', { modules: false }]
        ]
      });

// 也可以创建一个具名的插件!
config
  .plugin('clean')
    .use(CleanPlugin, [['dist'], { root: '/dir' }]);

console.log(config.toConfig())
// 导出这个修改完成的要被webpack使用的配置对象
module.exports = config.toConfig();

