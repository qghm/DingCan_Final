/**
 * 总路由
 */
var express = require('express');
var router = express.Router();

var user = require('./user');
var address = require('./address');
var index = require('./index');
var order = require('./order');

//调用所有的分支路由去注册
user(router);
address(router);
index(router);
order(router);

module.exports = router;


