var cart = angular.module('cart',[]);

//声明cartController
cart.controller('cartController', function ($scope,$filter) {
    $scope.price1 = 10;
    $scope.count1 = 1;
    $scope.price2 = 20;
    $scope.count2 = 2;
    $scope.price3 = 30;
    $scope.count3 = 1;
    //总价
    $scope.total = 0;

    //通过$watch方式监控价格总计的计算
    $scope.$watch('price1*count1+price2*count2+price3*count3', function (newVal, oldVal) {
        //值发生了变化，作相应的处理
        $scope.total = $scope.price1*$scope.count1+$scope.price2*$scope.count2+$scope.price3*$scope.count3;
    })
});


//声明filterController
cart.controller('filterController', function ($scope,$filter) {
    $scope.birthday = new Date();

    $scope.data = [1,2,3,4,5,6];

    //声明一个数组用于演示过滤器filter的用法
    $scope.friends = [
        {name:'John',phone:'555-1234'},
        {name:'Mary',phone:'800-1234'},
        {name:'Mike',phone:'555-4321'},
        {name:'Adam',phone:'555-5678'},
        {name:'Julie',phone:'555-8765'},
        {name:'Juliette',phone:'555-3456'}
    ];


    //排序字段定义:可能选项是'name','phone'
    $scope.orderField = 'name';

    //正序或倒序
    $scope.reverse = true;

});