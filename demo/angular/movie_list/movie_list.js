/*
 * @Author: huoqishi
 * @Date:   2016-07-02 17:00:17
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-02 17:15:11
 */

(function (angular) {
    // 1.创建正在热映模块
    var app = angular.module('moviecat.movie_list', ['ngRoute', 'moviecat.service.http']);

    // 2.配置路由，在各自的模块中配置路由，最后中主模块中引用，我们自己管理自己的路由规则
    app.config(['$routeProvider', function ($routeProvider) {
        // 写具体的规则
        $routeProvider.when('/:movieType/:page?', {
            // 指定一个模板路径,注意，模板字符串文件的路径是主模块所在目录开始计算.是相对于主模块文件所在路径计算的.
            templateUrl: './movie_list/view.html',
            controller: 'movie_listController'
        }).otherwise({
            redirectTo: '/home_page'
        })
    }])
    // 3.创建控制器
    app.controller('movie_listController', ['$scope', 'httpService', '$routeParams', '$route', function ($scope, httpService, $routeParams, $route) {
        console.log($routeParams);
        console.log($route);
        //是否加载
        $scope.loading = true;
        //分页操作
        var count = 10;
        var page = ($routeParams.page || '1') - 0
        var start = (page - 1) * count;
        $scope.nowPage = page;
        var totalPage = 0;
        httpService.jsonp('http://api.douban.com/v2/movie/' + $routeParams.movieType, {
            start: start,
            count: count,
            q:$routeParams.q
        }, function (response) {
            console.log(response)
            $scope.data = response;
            $scope.loading = false
            totalPage = Math.ceil($scope.data.total / count);
            $scope.totalPage = totalPage;
            $scope.total = $scope.data.total;
            $scope.$apply()
        })
        $scope.goPage = function (nowPage) {
            if (nowPage <= 0 || nowPage > totalPage) {
                return;
            }
            var nextPage = nowPage;
            $route.updateParams({
                page: nextPage
            })
        }

    }])
})(angular)