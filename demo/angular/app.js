(function (angular) {
    "use strict";

    // start your ride
    // 在这里我们开始创建主模块
    var app = angular.module('moviecat',[
        'moviecat.home_page',
        'moviecat.details',
        'moviecat.movie_list',
        'moviecat.auto-active'

    ]);
    app.controller('searchController',['$scope','$location', function ($scope,$location) {
        $scope.query ='';
        $scope.search = function () {
            $location.url('/search?q='+$scope.query)



        }
    }])
    
})(angular);