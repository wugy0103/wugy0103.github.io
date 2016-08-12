/**
 * Created by admin on 2016/7/10.
 */
(function (angular) {
  var app = angular.module('tab.route',[]);
  app.config(function ($stateProvider) {
    $stateProvider.state('tab',{
      url:'/tab',
      abstarct:true,
      templateUrl:'modules/tab/view.html'
    })
  })
})(angular)
