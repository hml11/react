// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      name: "@ctitle(8,12)",
      brandname:"@csentence(2, 8)",
      newprice:mr.float(60, 100, 0, 2),
      oldprice:mr.float(100, 150, 0, 2),
      discount:mr.float(0, 10, 0, 2)+"折",
      color:mr.color(),
      src:mr.image('100x100',mr.color()),
      type:"@integer(0,2)",
      time: "@integer(1553425967486,1553475967486)",
      detail:{
        auth:"@cname()",
        content:"@cparagraph(10,40)",
        icon:mr.image('150x150', mr.color(), mr.cword(1))
      }
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    'home': mapData(20),//解决 auth_icon 不随机
    'follow': mapData(21),
    'product': mapData(50),
    'banner|5': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        name: "@ctitle(8,12)",
        brandname:"@csentence(2, 8)",
        newprice:mr.float(60, 100, 0, 2),
        oldprice:mr.float(100, 150, 0, 2),
        discount:mr.float(0, 10, 0, 2)+"折",
        banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1553425967486,1553475967486)",
        detail:{
          icon:mr.image('150x150', mr.color(), mr.cword(1,2)),//
          auth:"@cname()",//百家姓
          content:"@cparagraph(10,20)"//正文
        }
      }
    ],
    'user':{
      "err": mr.integer(0,2),
      "msg": "已登录",
      "data": {
        "follow": mr.integer(0,0),
        "fans": mr.integer(0,0),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }
  })
};
