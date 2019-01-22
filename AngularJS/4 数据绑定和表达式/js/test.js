/**
 * 使用angular.module()创建应用程序模块
 * 第一个参数是模块名称
 * 第二个参数是依赖模块的数组
 */
var app = angular.module('myApp',[]);
//定义控制器myController
//第一个参数是控制器名称
//第二个参数是控制器具体定义，务必添加$scope(作用域对象)
app.controller('myController', function ($scope) {
    //声明myClass，用于测试ng-class的使用
    $scope.myClass = 'red';
    //创建变量isShow，和元素显示或隐藏挂钩
    $scope.isShow = true;
    //创建变量isHide，和元素显示或隐藏挂钩
    $scope.isHide = false;
    //创建变量isShowByNgIf，和元素添加或删除挂钩
    $scope.isShowByNgIf = true;
});
//定义控制器myController2，测试控制器的嵌套
app.controller('myController2', function ($scope) {
    $scope.price1 = 10;
    $scope.count1 = 1;
    $scope.price2 = 20;
    $scope.count2 = 2;
    $scope.price3 = 30;
    $scope.count3 = 1;
    //总价
    $scope.total = 0;
    //通过$watch方式监控价格总计的计算
    //第一个参数：设置已声明对象
    //第二个参数：设置回调函数
    $scope.$watch('price1*count1+price2*count2+price3*count3', function (newVal, oldVal) {
        //值发生了变化，总价作相应的处理
        $scope.total = $scope.price1*$scope.count1+$scope.price2*$scope.count2+$scope.price3*$scope.count3;
    })
})