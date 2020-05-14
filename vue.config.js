// vue.config.js
console.log(process.env.NODE_ENV)
const config = require('./config')
const utils = require('./build/utils.js')
const env = process.env.NODE_ENV
module.exports = {
    // 不同环境项目名
    publicPath: config[env].assetsPublicPath,
    // 打包资源文件夹路径
    assetsDir:config[env].assetsDir,

    devServer:{
        open: true, //自动打开浏览器
        port: 8082,
    },
    lintOnSave:false,
    // 页面路口配置
    pages:utils.entries(),
    chainWebpack: config => {
        config.optimization.splitChunks({
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    minChunks: 2,
                    test: /node_modules/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {}
             }
        });
        if (process.env.NODE_ENV === 'production') {
            config.output.filename('resource/js/[name].[chunkhash].js').end();
            config.output.chunkFilename('resource/js/[name].js').end();
            // 修改生产配置
            config.plugin('extract-css').tap(args => [{
                    filename: `resource/css/[name].css`,
                    chunkFilename: `resource/css/[name].css`
                }])
        };
    },
  
}