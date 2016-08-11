/**
 * Created by admin on 2016/7/6.
 */
(function (angular) {
    var app = angular.module('moviecat.home_page',['ngRoute'])
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home_page',{
            templateUrl:'./home_page/view.html'
        })
    }])



})(angular)