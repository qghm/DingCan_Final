## 今日目标:
* 地址模块的后台
* 地址模块的前台

-------------------------------------

* 完成address_dao.js的编码和测试
    * 引入connection.js
    * mongoose
    * Schema-->addressSchema
    * AddressModel--->addressModel
    
    * getAddrsByUserId(userId, cb)
    * addAddr(address, cb)
    * updateAddr(address, cb)
    * deleteAddrById(id, cb)

* 完成gb.js

* 完成address.js
    * 查询地址列表
        /getAddrsByUserId?userId=576bbe0aa1d183c42c06c08e
        {
                    "code": 0,
                    "data":[{}, {}]
        }
    * 添加地址
        /insertAddr?address={address:'', userId:'',....}
        {
            code : 0,
            data : {
                        _id : 'xxxxx',
                       "userId": "576bbe0aa1d183c42c06c08e",
                       ...
                    }
        }
    * 修改
        /updateAddr?address={'_id':'xxxx','userId':'yyyy'.... }
        {
            "code":0,
            "data":{"ok":1,"nModified":0,"n":1}
        }
    * 删除
        /deleteAddr?_id=576bc242b20ba0b02ed9c5cc
        {
            "code": 0,
            "data":{"ok":1,"nModified":0,"n":1}
        }

* 完成地址添加页面
