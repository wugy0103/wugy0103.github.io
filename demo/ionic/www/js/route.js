/**
 * Created by admin on 2016/7/8.
 */
(function (angular) {
  'use strict';
  var app = angular.module('starter.route',[
    'guidePage.route',
    'tab.route',
    'home.route',
    'category.route',
    'goodsList.route',
    'cart.route',
    'account.route'
  ]);
  app.config(function ($stateProvider,$urlRouterProvider) {
    if(!localStorage.guidePage){
      $urlRouterProvider.otherwise('/guidePage');
    }else {
      $urlRouterProvider.otherwise('/tab/home');
    }
  })
})(angular)
