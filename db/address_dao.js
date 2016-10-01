/**
 * 操作addresses集合的dao
 */
var connection = require('./connection');
/*
connection.connect();
function cb(err, result) {
    console.log('err='+err+' result='+result);
}
*/

/*
 * 引入connection.js
 * mongoose
 * Schema-->addressSchema
 * AddressModel--->addressModel

 * getAddrsByUserId(userId, cb)
 * addAddr(address, cb)
 * updateAddr(address, cb)
 * deleteAddrById(id, cb)
 */

var mongoose = connection.mongoose;
/*
 {
 "_id": {
 "$oid": "575f7085f8a14116283dab96"
 },
 "address": "北京大学-26号楼",
 "contactor": "张三",
 "lat": "39.993851111808",
 "lng": "116.31838249961 ",
 "phone": "17711111111",
 "sex": "1",
 "state": "1",
 "userId": "575f7085f8a14116283dabc7",
 "cityId": "113",
 "doorplate": "212"
 }
 */
var addressSchema = new mongoose.Schema({
    "address": String,
    "contactor": String,
    "lat": String,
    "lng": String,
    "phone": String,
    "sex": Number,
    "state": Number,
    "userId": String,
    "cityId": String,
    "doorplate": String
});

var AddressModel = mongoose.model('address', addressSchema);

/*
查询指定userId地址列表
 */
function getAddrsByUserId (userId, cb) {
    AddressModel.find({userId : userId}, cb);
}
exports.getAddrsByUserId = getAddrsByUserId;
//getAddrsByUserId('575f7085f8a14116283dabc7', cb);

/*
 添加地址
 */
function addAddr(address, cb) {
    var addressModel = new AddressModel(address);
    addressModel.save(cb);
}
exports.addAddr = addAddr;
/*addAddr({"address": "北京大学-26号楼",
    "contactor": "张晓飞",
    "lat": "39.993851111808",
    "lng": "116.31838249961 ",
    "phone": "1772222222",
    "sex": 1,
    "state": 1,
    "userId": "575f7085f8a14116283dabc7",
    "cityId": "113",
    "doorplate": "宏福苑"}, cb);*/

/*
修改地址
 */
function updateAddr(address, cb) {
    AddressModel.update({_id : address._id}, address, cb); //返回的是: {n:1, ok:1}
}
exports.updateAddr = updateAddr;
/*updateAddr({_id : '5771ddf6318f8cd41f9ba155',
    "address": "北京大学-8号楼",
    "contactor": "阮晓菲",
    "lat": "39.993851111808",
    "lng": "116.31838249961 ",
    "phone": "1772222222",
    "sex": 1,
    "state": 1,
    "userId": "575f7085f8a14116283dabc7",
    "cityId": "113",
    "doorplate": "宏福苑2"}, cb);*/


/*
删除地址
 */
function deleteAddrById(id, cb) {
    AddressModel.remove({_id:id}, cb);  //返回 {"ok":1,"n":1}
}
exports.deleteAddrById = deleteAddrById;
//deleteAddrById('5771ddf6318f8cd41f9ba155', cb);


/*
根据userId查询其对应的一个默认地址
 */
function getDefaultAddrByUserId (userId, cb) {
    AddressModel.findOne({userId : userId}, cb);
}
exports.getDefaultAddrByUserId = getDefaultAddrByUserId;