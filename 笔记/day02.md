##今日目标
* 根据结构图完成后台整体设计编码
* 实现connection.js的编码
* 实现dao的编码
* 实现gb.js的编码
* 实现config.js的编码
* 实现分路由的编码

--------------------------------------------------------

* 根据结构图完成后台整体设计编码
    * 路由
        * 总路由: config.js
        * 分路由: user.js/feedback.js/...
    * DB
        * connnection.js
        * 数据库操作的总接口: gb.js
        * dao : dao_user.js/dao_feedback.js/....

* 实现connection.js的编码
    * mongoose
    * 打开连接: mongoose.connect('mongodb://localhost/atguigu_o2o');
    * 关闭连接: mongoose.disconnect()
    * 当项目启动时打开连接, 当项目关闭时断开连接 : app.js
        connection.connect()
        app.on('close', connection.disConnect())

* 实现user_dao.js的编码和测试
    * 引入connection.js---->mongoose
    * Schema:
        类型: var Schema = mongoose.Schema;
        实例: var userSchema = new Schema({字段名称和类型描述});
    * Model:
        类型 : var UserModel = mongoose.model('user', function); //find/update/delete
        实例(Entity) : var userModel = new UserModel(dataObj);   //save()  
    * 定义getUser(), 并出口
            UserModel.findOne(条件对象, function(err, user){}) //如果没有返回null
            UserModel.find(条件对象, function(err, userArr){}) //如果没有返回[]
    * 定义addUser(), 并出口
            userModel.save(function(err, user){})

* 实现feedback_dao.js的编码和测试
    * 引入connection.js
    * Schema
    * Model
    * 定义addFeedback(), 并出口
    
* 实现gb.js的编码
    * 引入dao的js
    * 定义数据库的方法:
        getUser : funnction(phone, fn){
            user_dao.getUser(phone, function(err, user){
                if(err) {
                    throw err;
                } else {
                    fn(user);
                }
            });
        }
    
* 实现config.js的编码
    * 引入所有分支路由
    * 调用分支路由函数, 注册所有路由

* 实现分路由的编码
    router.get('/xxx', function(req, res, next){
       //获取请求参数
            req.body  | req.query
       //处理数据
            db.xxx()
       //响应数据
            res.json({})
    });

