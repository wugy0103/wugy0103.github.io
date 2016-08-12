/**
 * Created by admin on 2016/7/11.
 */
(function (angular) {
  var app = angular.module('account.route',['account.controller']);
  app.config(function ($stateProvider) {
    $stateProvider.state('tab.account',{
      url:'/account',
      views:{
        'tab-account':{
          templateUrl:'modules/account/view.html',
          controller:'accountCtrl'
        }
      }
    })
  })
})(angular)
