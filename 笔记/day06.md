地图定位
    index.html : 得到当前的位置显示
    chooseCoordinate.html : 选择指定位置
购物车动画
    index.html : 在添加/减少菜品时的动画
    
    
百度地图:
	百度进入: 百度地图API
	注册百度账号
	注册成为百度的开发者
	进入API控制台: 创建应用
	开发-->javascriptAPI


* index.html : 得到当前的位置显示
	* 异步加载地图信息
	* 加载script
	* 使用Geolocation得到当前的坐标点: point
	* 使用Geocoder根据point得到对应的address
	* window.init = function () {}
	* $scope.$apply(function () {}); //脏数据检查, 更新界面