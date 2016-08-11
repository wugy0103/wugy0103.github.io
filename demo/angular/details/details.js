/**
 * Created by admin on 2016/7/6.
 */
(function (angular) {
    var app = angular.module('moviecat.details',['ngRoute','moviecat.service.http']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/details/:id',{
            templateUrl:'./details/view.html',
            controller:'detailsController'
        })
    }])
    app.controller('detailsController',['$scope','httpService','$routeParams', function ($scope, httpService,$routeParams) {
        httpService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{}, function (response) {
            console.log(response);
            $scope.movie = response;
            $scope.$apply()
        })
    }])



})(angular)