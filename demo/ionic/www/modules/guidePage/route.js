/**
 * Created by admin on 2016/7/8.
 */
(function (angular) {
  'use strcit';
  var app = angular.module('guidePage.route',['guidePage.controller']);
  app.config(function ($stateProvider) {
    $stateProvider.state('guidePage',{
      url:'/guidePage',
      templateUrl:'modules/guidePage/view.html',
      controller:'guidePageCtrl'
    })
  })
})(angular)
