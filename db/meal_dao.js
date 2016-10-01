/**
 * 操作meals集合的dao
 */
var connection = require('./connection');

/*
connection.connect();
function cb(err, result) {
    console.log('err='+err+' result='+result);
}
*/

//mongoose
var mongoose = connection.mongoose;
//Schema
var mealSchema = new mongoose.Schema({
    "group_id": Number,
    "groupName": String,
    "mealCode": String,
    "mealType": Number,
    "mealName": String,
    "price": Number,
    "originalPrice": Number,
    "picture": String,
    "instruction": String,
    "sales": Number,
    "state": Number
});
//Model
var MealModel = mongoose.model('meal', mealSchema);
//查询
function getMeals(fn) {
    MealModel.find(fn);
}
exports.getMeals = getMeals;
//getMeals(cb);