/**
 * Created by admin on 2016/7/10.
 */
(function (angular) {
  var app = angular.module('home.route',[
    'home.controller'
    //'test'
  ]);
  app.config(function ($stateProvider) {
    console.log(1)
    $stateProvider.state('tab.home',{
      url:'/home',
      views:{
        'tab-home':{
          templateUrl:'modules/home/view.html',
          controller:'homeCtrl'
          //controller:'testCtrl'
        }
      }
    })
  })
})(angular)
