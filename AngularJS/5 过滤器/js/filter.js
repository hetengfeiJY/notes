var app = angular.module('filter',[]);
//声明filterController
app.controller('filterController', function ($scope,$filter) {
    //声明一个数组用于演示过滤器filter的用法
    $scope.friends = [
        {name:'John',phone:'555-1234'},
        {name:'Mary',phone:'800-1234'},
        {name:'Mike',phone:'555-4321'},
        {name:'Adam',phone:'555-5678'},
        {name:'Julie',phone:'555-8765'},
        {name:'Juliette',phone:'555-3456'}
    ];
    //正序或倒序
    $scope.reverse = true;
    //排序函数
    $scope.order = function (field, reverse) {
        //$filter需要通过依赖注入才能使用
        var orderBy = $filter('orderBy');
        //排序后的结果集需要赋值给原先的结果集才能使用
        $scope.friends = orderBy($scope.friends,field,reverse);
    }

});
//自定义一个大写过滤器：可以将输入字符串的第一个字母变成大写
app.filter('capitalize', function () {
    return function (input) {
        //input就是要过滤的字符串
        //input[0]:获取索引为零的字符串
        //toUpperCase():转换成大写
        //substr(1)截取从1开始到最后的字符串
        return input[0].toUpperCase()+input.substr(1);
    }
});






