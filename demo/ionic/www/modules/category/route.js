/**
 * Created by admin on 2016/7/10.
 */
(function (angular) {
  var app = angular.module('category.route',['category.controller'])
  app.config(function ($stateProvider) {
    $stateProvider.state('tab.category',{
      url:'/category',
      views:{
        'tab-category':{
          templateUrl:'modules/category/view.html',
          controller:'categoryCtrl'
        }
      }
    })
  })
})(angular)
