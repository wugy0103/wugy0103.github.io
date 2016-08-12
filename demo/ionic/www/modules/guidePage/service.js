/**
 * Created by admin on 2016/7/8.
 */
(function (angular) {
  'use strict';
  var app = angular.module('guidePage.service',[]);
  app.factory('guidePageService', function () {
    return {
      sayHello: function () {
        console.log('小明');
      }
    }
  })
})(angular)
