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
    //在作用域中定义变量
    $scope.isChecked = false;

    $scope.onChange = function () {
        console.log($scope.isChecked);
    }

    $scope.usernameChange= function () {
        console.log($scope.username);
    }

    //声明myClass，用于测试ng-class的使用
    $scope.myClass = 'red';
    //表达式结果为一个数组
    $scope.myClassArr = ['blue','border'];
    //表达式结果是一个对象，则key的值为true时，其key才作为类名使用
    $scope.myClassObj = {'red':true,'blue':false};

    //创建变量isHide，和元素显示或隐藏挂钩
    $scope.isHide = true;

    //创建变量isSelected，设置下拉列表的选中项目
    $scope.isSelected = true;


    $scope.val = 'hello';
    //$scope.myVal = 'world';
});

//定义控制器myController2，测试控制器的嵌套
app.controller('myController2', function ($scope) {

})