'use strict'
const path = require('path')
const config = require('../config')
const env = process.env.NODE_ENV

var glob = require('glob')

// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
var PAGE_PATH = path.resolve(__dirname, '../src/pages')

//多入口配置
// 通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在
// 那么就作为入口处理
exports.entries = function () {
  var entryFiles = glob.sync(PAGE_PATH + '/**/*.html')
  var map = {}
  entryFiles.forEach((filePath) => {
    let obj = {}
    let filename = ''
    let fileDirArr = filePath.split('/')
    let fidirlength=fileDirArr.length
    // filename =fileDir+'/'+ filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    filename = fileDirArr[fidirlength-3]+'/'+fileDirArr[fidirlength-2]
    obj.filename = 'templates/'+  filename + '.html'
    obj.template = filePath
    obj.entry = filePath.substring(0, filePath.lastIndexOf('.'))+'.js'
    obj.chunks=["chunk-vendors","chunk-common", filename]
    obj.title = fileDirArr[fidirlength-2]
    map[filename] = obj
     
  })
  console.log(map)

  return map
}

