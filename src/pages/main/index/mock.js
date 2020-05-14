// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
import _ from 'lodash';
// mock一组数据
 
// 返回上一次的预约信息
Mock.mock(`/bus/pub/carpool/pendingOrderNum`, (req, res) => {
    return {
        operResult:true,
        code:0,
        data:{
            payBackNum:2,
            toTravelNum:3,
            maxWaypointNum:4,
            maxPersonNum:5,
            cancelTime:10,
            maxCondNum:10,
            minCondNum:5,
            timeList:[5,10,15],
            serviceHotline:'4004099888',
            userAgreementUrl:'http://www.baidu.com',
            chtInformationUrl:'http://www.baidu.com',
            placeOrderTips:'您好'
        }
    }
});
