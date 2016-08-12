/**
 * Created by admin on 2016/7/8.
 */
(function (angular) {
  'use strict';
  var app = angular.module('guidePage.controller',['guidePage.service']);
  app.controller('guidePageCtrl', function ($scope,$ionicPopup,$ionicActionSheet,$ionicModal,$ionicPopover,$state) {
    //$scope.onSlideChange = function ($index) {
    //  console.log('我是小明'+$index);
    //
    //}
    //$scope.showPopup = function () {
    //  var myPopup = $ionicPopup.show({
    //    template:'<input>',
    //    title:'请输入密码',
    //    subTitle:'请输入密码',
    //    scope:$scope,
    //    buttons:[
    //      {
    //        text:'取消',
    //        onTap: function (e) {
    //          console.log("取消");
    //          e.preventDefault();
    //          myPopup.close();
    //        }
    //      },
    //      {
    //        text:'<b>save</b>',
    //        type:'button-royal',
    //        onTap: function (e) {
    //          console.log('保存')
    //        }
    //      }
    //    ]
    //  })
    //}
    //$scope.showActionSheet = function () {
    //  var hidesheet = $ionicActionSheet.show({
    //    buttons:[
    //      {
    //        text:'<b>打开相机</b>'
    //      },
    //      {
    //        text:'打开相册'
    //      },
    //      {
    //        text:'关机'
    //      }
    //    ],
    //    destructiveText:'删除',
    //    cancelText:'Cancel',
    //    cancel: function () {
    //      console.log('cancel')
    //    },
    //    destructiveButtonClicked: function () {
    //      console.log('删除')
    //    },
    //    buttonClicked: function (index) {
    //      console.log(index);
    //      hidesheet();
    //    }
    //  })
    //}
    //
    //$ionicModal.fromTemplateUrl('my-modal.html',{
    //  scope:$scope,
    //  animate:'slide-in-up'
    //}).then(function (modal) {
    //  $scope.modal = modal;
    //});
    //$scope.showModal = function () {
    //  $scope.modal.show();
    //}
    //$scope.hideModal = function () {
    //  $scope.modal.hide();
    //}
    //
    //$ionicPopover.fromTemplateUrl('my-popover.html',{
    //  scope:$scope
    //}).then(function (popover) {
    //  $scope.popover = popover;
    //})
    //$scope.showPopover = function ($event) {
    //  $scope.popover.show($event);
    //}
    //$scope.closePopover = function () {
    //  $scope.popover.hide();
    //}

    ////swiper
    //var mySwiper = new Swiper('.swiper-container', {
    //  autoplay: 5000,//可选选项，自动滑动
    //})

    //引导页
    var mySwiper = new Swiper('#guideSlide', {
      //autoplay: 3000,//可选选项，自动滑动
      onSlideChangeEnd: function(swiper){
        console.log(swiper);
        var activeIndex = swiper.activeIndex;
        var slide = document.getElementById('tips-'+(activeIndex+1));
        angular.element(slide).removeClass('hidden').addClass('guide-show');
      }

    })
    $scope.goHome = function () {
      $state.go('tab.home');
      localStorage["guidePage"]=true;
    }


  })
})(angular)
