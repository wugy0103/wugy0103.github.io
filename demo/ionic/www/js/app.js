(function (angular) {
  'use strict';
  var app = angular.module('starter',[
    'ionic',
    'starter.route',
    'starter.global',
    'starter.config',
    'ionicLazyLoad',
    'ngCordova'


  ]);
  // 在angular其他地方开始执行前，做一些初化操作
  app.run(function($ionicPlatform, $location, $ionicHistory, $cordovaToast, $rootScope) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      // 在这里写一些操作硬件的代码，第一个参数是按下返回键执行的方法，第二个参数是执行优先级。

      $ionicPlatform.registerBackButtonAction(function(e) {
        // $rootScope是angular里的服务.,在每一个控制器里都可以注入这个对象,在任何控制器里得到的这个变量都是一样的。
        // 这个值用来表示我们是不是刚刚打开app
        // 如果刚刚打开app,就立即按返回键,我们认为用想退出.
        if ($rootScope.backButtonPressedOnceToExit) {
          // 这句话是退出app
          ionic.Platform.exitApp();
        } else {
          // 如果，这里的页面是tab选项卡里的url，则弹出提示
          if ($location.path() == "/tab/home" || $location.path() == "/tab/category" || $location.path() == "/tab/account") {

            $rootScope.backButtonPressedOnceToExit = true;

            // 这个就是用来是页面弹出一个提示
            $cordovaToast.showShortBottom('再点一次退出！');
            setTimeout(function() {
              $rootScope.backButtonPressedOnceToExit = false;
            }, 2000)
          } else {
            // 退到上一个页面.
            $ionicHistory.goBack();
          }
        }
        e.preventDefault();
        return false;
      }, 998);
    });
  })



})(angular)
