/**
 * 用户路由
 */
var db = require('../db/gb');  //db是一个对象

module.exports = function (router) {
    //注册多个路由

    //登陆
    router.post('/login', function (req, res, next) {
        //从req中获取数据
        var phone = req.body.phone;
        var code = req.body.code;
        console.log('/login phone='+phone+' code='+code);
        //调用db处理数据
            //根据phone进行查询
        db.getUser(phone, function (user) { //查询返回的user
            //如果没有, 添加数据, 并返回数据
            if(user==null) {
                db.addUser({phone:phone}, function (user) {//添加返回的user
                    res.send({
                        code: 0,
                        data: user
                    });
                })
            } else {
                //如果有, 返回数据
                res.send({
                    code: 0,
                    data: user
                });
            }
        });
    });

    //意见反馈
    router.get('/feedback', function (req,res, next) {
        //获取参数数据
        var dataJson = req.query.data;
        var feedback = JSON.parse(dataJson);
        //处理数据
        db.addFeedback(feedback, function (feedback) {
            //返回数据
            res.json({code : 0, data : feedback});
        });
    });


    router.post('/test', function (req, res, next) {

        console.log(req.body.name+"----"+req.body.age);
        console.log(req.body.data);
    });
};