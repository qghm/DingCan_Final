"use strict";
/**
 * 数据库操作总接口
 */
var user_dao = require('./user_dao');
var feedback_dao = require('./feedback_dao');
var address_dao = require('./address_dao');
var banner_dao = require('./banner_dao');
var meal_dao = require('./meal_dao');
var order_dao = require('./order_dao');

var data = {
    getUser : function (phone, fn) { //fn由路由user.js
        user_dao.getUser(phone, function (err, user) {
            if(err) {
                throw err;
            } else {
                fn(user);
            }
        });
    },

    addUser : function (user, fn) {
        user_dao.addUser(user, function (err, user) {
            if(err) {
                throw err;
            } else {
                fn(user);
            }
        });
    },

    addFeedback : function (feedback, fn) {
        feedback_dao.addFeedback(feedback, function (err, feedback) {
            if(err) {
                throw err;
            } else {
                fn(feedback);
            }
        });
    },

    getAddrsByUserId : function (userId, fn) {
        address_dao.getAddrsByUserId(userId, function (err, addressArr) {
            if(err) {
                throw err;
            } else {
                fn(addressArr);
            }
        });
    },

    addAddr : function (address, fn) {
        address_dao.addAddr(address, function (err, address) {
            if(err) {
                throw err;
            } else {
                fn(address);
            }
        })
    },

    updateAddr : function (address, fn) {
        address_dao.updateAddr(address, function (err, result) { //{n:1,ok:1}
            if(err) {
                throw err;
            } else {
                fn(result);
            }
        })
    },

    deleteAddrById : function (id, fn) {
        address_dao.deleteAddrById(id, function (err, result) {//{n:1,ok:1}
            if(err) {
                throw err;
            } else {
                fn(result);
            }
        })
    },

    getBanners : function (fn) {
        banner_dao.getBanners(function (err, bannerArr) {
            if(err) {
                throw err;
            } else {
                fn(bannerArr);
            }
        })
    },

    getMeals : function (fn) {
        meal_dao.getMeals(function (err, mealArr) {
            if(err) {
                throw err;
            } else {
                fn(mealArr);
            }
        })
    },

    addOrder : function (order, fn) {
        order_dao.addOrder(order, function (err, order) {
            if(err) {
                throw err;
            } else {
                fn(order);
            }
        });
    },

    getOrderById : function (id, fn) {
        order_dao.getOrderById(id, function (err, order) {
            if(err) {
                throw err;
            } else {
                fn(order);
            }
        })
    },

    getOrdersByUserId : function (userId, fn) {
        order_dao.getOrdersByUserId(userId, function (err, orderArr) {
            if(err) {
                throw err;
            } else {
                fn(orderArr);
            }
        })
    },

    getDefaultAddrByUserId : function (userId, fn) {
        address_dao.getDefaultAddrByUserId(userId, function (err, address) {
            if(err) {
                throw err;
            } else {
                fn(address);
            }
        })
    }
};
module.exports= data;

