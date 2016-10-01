## 今日目标
* 登陆
    * 表单验证
    * 验证码
    * ajax请求登陆
* 个人中心
    * 检查是否登陆并处理
* 意见反馈
    * ajax提交意见反馈请求

------------------------------------

* 表单验证
    * 引入angular, angular-message
    * 编写基本angular指令和代码
    * 定义验证规则
    * 定义错误信息

* 验证码:
    * ng-click, ng-disabled ng-bind
    * 使用$interval实现倒计时
    * 更新处理逻辑

* ajax请求登陆
    * 接口:
        地址：
            http://localhost:5000/login
        请求体:
            phone=13716962779&code=123123
        返回:
            {
                "code": 0,
                "data": {
                    "__v": 0,
                    "phone": "13716962779",
                    "_id": "576bbe0aa1d183c42c06c08e"
                }
            }
    * 处理ajax跨域请求
        cors : res.set('Access-Control-Allow-Origin', '*')   (服务器端)
    * ajax请求:
        使用$http服务
        $http({
            method : 'POST',
            url : 'http://localhost:5000/login',
            data : $scope.user,  //如果有下面的, 转换为json({"phone":'123','code':'123123'}), 而不是phone=13716962779&code=123123
            headers :  {      //跨域请求时才必须用
                               'Content-Type': 'application/x-www-form-urlencoded'
                       }
        })
        .success(function(result){
            //保存用户信息到session
            //跳转到个人中心页面
        })
        .error(function(result){
            alert(result);
        });
   
* 个人中心, 实现检查是否登陆并处理
    * 读取session中的user信息
        * 如果没有, 提示转向到login.html
        * 如果有, 显示phone

* ajax提交意见反馈请求
    接口:
        路径 : http://localhost:5000/feedback
        请求方式 : GET
        请求参数的格式:
            data = '{
                        "user_id": "576bbe0aa1d183c42c06c08e",
                        "phone": "13716962779",
                        "content": "不错不错!"
                    }'
        响应数据的格式
            {
                "code": 0,
                "data": {
                    "__v": 0,
                    "user_id": "576bbe0aa1d183c42c06c08e",
                    "phone": "13716962779",
                    "content": "不错不错",
                    "_id": "576bd0379f36dbc017176254",
                    "create_time": "2016-06-23T12:03:03.306Z"
                }
            }
    
    
接口:
    路径
    请求方式
    请求参数的格式
    响应数据的格式