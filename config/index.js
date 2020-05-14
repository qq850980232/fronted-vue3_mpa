'use strick'
module.exports={
    //开发环境
    development:{
        assetsPublicPath:"/",
        assetsDir:'resource'
    },
    //生产环境
    production:{
        assetsPublicPath:"/production/",
        assetsDir:'resource'
    },
    //测试环境
    test:{
        assetsPublicPath:"/test/",
        assetsDir:'resource'
    }
}