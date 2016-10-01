/**
 * 操作users集合的dao
 */
var connection = require('./connection');
var mongoose = connection.mongoose;

//测试 start
/*connection.connect();
function cb(err, result) {
    console.log('err='+err+" result="+result);
}*/
//测试 end

//Schema
    //得到Schema类
var Schema = mongoose.Schema;
    //创建Schema的实例
/*
 {
 "_id": {
 "$oid": "576bbe0aa1d183c42c06c08e"
 },
 "phone": "13716962779"
 }
 */
var userSchema = new Schema({
    phone : String
});
//Model
    //得到Model类
var UserModel = mongoose.model('user', userSchema);

/*
 定义getUser(), 并出口
 */
var getUser = function (phone, cb) {
    UserModel.findOne({phone:phone}, cb);
}
exports.getUser = getUser;
//getUser('13201010101', cb);

/*
 定义addUser(), 并出口
 */
var addUser = function (user, cb) {
    //创建model实例
    var userModel = new UserModel(user);
    //保存数据
    userModel.save(cb);
}
exports.addUser = addUser;
//addUser({phone:'12312312312'}, cb);
//console.log(module.exports===exports);
