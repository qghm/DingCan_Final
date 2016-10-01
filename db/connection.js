/**
 * 数据库连接
 */
var mongoose = require('mongoose');//引入mongoose

/*
出口mongoose
 */
exports.mongoose = mongoose;

/*
定义连接的方法, 并出口
 */
var connect = function () {
    //连接数据库
    mongoose.connect('mongodb://localhost/atguigu_o2o');

    //得到连接对象
    var conn = mongoose.connection;
    //监听打开连接
    conn.once('open', function() {
        console.log('we are connected!');
    });
    //设置连接错误的监听
    conn.on('error', console.error.bind(console, 'connection error:'));
};
exports.connect = connect;
//connect();

/*
 定义关闭连接的方法, 并出口
 */
function disConnect() {
    mongoose.disconnect();
}
exports.disconnect = disConnect;
//disConnect();