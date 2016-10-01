/**
 * 操作index_banners集合的dao
 */
var connection = require('./connection');


/*connection.connect();
function cb(err, result) {
    console.log('err='+err+' result='+result);
}*/

//mongoose
var mongoose = connection.mongoose;
//Schema
var bannerSchema = new mongoose.Schema({
    "img_src": String,
    "link": String,
    "sort": Boolean
});
//Model
var BannerModel = mongoose.model('index_banner', bannerSchema);
//查询

function getBanners(fn) {
    BannerModel.find(fn);
}
exports.getBanners = getBanners;
//getBanners(cb);