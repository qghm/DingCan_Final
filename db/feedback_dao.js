/**
 * 操作feedbacks集合的dao
 */
var connection = require('./connection');

//测试
/*connection.connect();
function cb(err, result) {
    console.log('err='+err+" result="+result);
}*/

//mongoose
var mongoose = connection.mongoose;
//Schema
var Schema = mongoose.Schema;
/*
 {
 "_id": {
 "$oid": "57624634edb35fb81e258e34"
 },
 "user_id": "57623dd0a20d4fc41cb26d53",
 "phone": "15611111111",
 "content": "have a good day",
 "create_time": {
 "$date": "2016-06-16T14:24:52.070+0800"
 }
 }
 */
var feedbackSchema = new Schema({
    "user_id": {type:String},
    "phone": String,
    "content": String,
    "create_time": {type:Date, default:Date.now()} //指定默认值
 });

//Model
var FeedbackModel = mongoose.model('feedback', feedbackSchema);

/*
addFeedback()，　出口
 */
function addFeedback(feedback, cb) {
    //创建包含数据的Model实例对象
    var feedbackModel = new FeedbackModel(feedback);
    //保存
    feedbackModel.save(cb);
}
exports.addFeedback = addFeedback;
/*
addFeedback({"user_id": "57623dd0a20d4fc41cb26d53",
    "phone": "15611111111",
    "content": "have a good day",
    "create_time": "2016-06-16T14:24:52.070+0800"}, cb);*/
