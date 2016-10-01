/**
 * 操作orders集合的dao
 */
var connection = require('./connection');

//测试 start
/*connection.connect();
function cb(err, result) {
    console.log('err=' + err + " result=" + result);
}*/

//mongoose
var mongoose = connection.mongoose;

//Schema
/*
 {
 "_id": {
 "$oid": "575f7085f8a14116283daba4"
 },
 "contactor": "1",
 "address": "s",
 "phone": "1310000000",
 "rstName": null,
 "remark": null,
 "doorplate": null,
 "total_money": "65",
 "peisongfei": "0",
 "state": null,
 "order_time": {
 "$date": "2016-05-23T09:05:08.000+0800"
 },
 "arrive_time": null,
 "detail": "{data:[{\"rstId\":1,\"money\":65,\"meals\":[{\"mealId\":0,\"num\":1,\"price\":\"23\"},{\"mealId\":1,\"num\":2,\"price\":\"21\"}]}]}",
 "user_id": "575f7085f8a14116283dabc4",
 "coupon_id": -1
 }
 */
var orderSchema = new mongoose.Schema({
    "contactor": String,
    "address": String,
    "phone": String,
    "rstName": String,
    "remark": String,
    "doorplate": String,
    "total_money": Number,
    "peisongfei": Number,
    "state": Number,
    "order_time": {
        type : Date, default : Date.now()
    },
    "arrive_time": Date,
    "detail": String,
    "user_id": String,
    "coupon_id": String
});

//Model
var OrderModel = mongoose.model('order', orderSchema);

//添加订单
function addOrder (order, fn) {
    var orderModel = new OrderModel(order);
    orderModel.save(fn);
}
exports.addOrder = addOrder;
/*addOrder({
    "contactor": "张晓飞",
    "address": "平西府",
    "phone": "1310000000",
    "rstName": null,
    "remark": "不错不错",
    "doorplate": "硅谷大楼",
    "total_money": 65,
    "peisongfei": 0,
    "state": 3,
    "arrive_time": "2016-7-1 10:28",
    "detail": "{data:{\"rstId\":1,\"money\":65,\"meals\":[{\"mealId\":0,\"num\":1,\"price\":\"23\"},{\"mealId\":1,\"num\":2,\"price\":\"21\"}]}}",
    "user_id": "575f7085f8a14116283dabc4",
    "coupon_id": "575f7085f8a14116283dab23"
}, cb);*/

//根据id查询订单
function getOrderById(id, fn) {
    OrderModel.findOne({_id:id}, fn);
}
exports.getOrderById = getOrderById;
//getOrderById('5775c7e145bb4ad41e45ecbb', cb);


//根据userId查询对应的订单列表
function getOrdersByUserId(userId, fn) {
    OrderModel.find({user_id : userId}, fn);
}
exports.getOrdersByUserId = getOrdersByUserId;
//getOrdersByUserId('575f7085f8a14116283dabc4', cb);









