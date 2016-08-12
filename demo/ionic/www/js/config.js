/**
 * Created by admin on 2016/7/8.
 */
(function (angular) {
  'use strict';
  var app = angular.module('starter.config',[]);
  app.config(function ($ionicConfigProvider) {
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
  })
})(angular)
