/**
 * Created by admin on 2016/7/11.
 */
(function (angular) {
  var app = angular.module('cart.route',['cart.controller']);
  app.config(function ($stateProvider) {
    $stateProvider.state('cart',{
      url:'/cart',
      templateUrl:'modules/cart/view.html',
      controller:'cartCtrl'
    })
  })
})(angular)
