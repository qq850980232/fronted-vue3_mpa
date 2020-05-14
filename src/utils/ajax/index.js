import axios from 'axios'

const qs = require('qs')

function AjaxPromise(url, param, method = 'post') {
    return new Promise((resolve, reject) => {
      axios({
        method,
        url,
        data: qs.stringify(param),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
      }).then(function(response){
          if (response.data.operResult) {
              resolve(response.data);
          } else {
      
              reject({
                  code: response.data.errorCode,
                  msg: response.data.errorMsg
              });
          }
      }).catch(function (err) {
          reject({
              code: '-999',
              msg: "ajax请求出错或网络错误"
          });
      })
    })
}

  export { AjaxPromise}