 /** index.js MVC构架
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
    $scope.num = 0;
    //在作用域中定义add函数，以便视图中使用
    $scope.add = function(){
        $scope.num++;
    }
});

//定义控制器myController2(父控制器包涵子控制器，那么子控制器继承父控制器)，测试控制器的嵌套
app.controller('myController2', function ($scope) {

})
