/**
 * Created by admin on 2016/7/10.
 */
(function (angular) {
  var app = angular.module('goodsList.route',['goodsList.controller']);
  app.config(function ($stateProvider) {
    $stateProvider.state('goodsList',{
      url:'/goodsList/:typeNumber',
      templateUrl:'modules/goodsList/view.html',
      controller:'goodsListCtrl'
    })
  })
})(angular)
