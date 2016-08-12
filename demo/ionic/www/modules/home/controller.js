/**
 * Created by admin on 2016/7/10.
 */
(function (angular) {
  var app = angular.module('home.controller',['home.service']);
  app.controller('homeCtrl', function ($scope,$interval) {
    $scope.$on('$ionicView.enter', function () {
      headerSlide();
      toutiaoSlide();
      timeSecKill();
      topColorChange()
      goTop()
    })
    //头部轮播图
    function headerSlide(){
      var headerSwiper = new Swiper('#headerSlider',{
        autoplay:1000,
        pagination:'.swiper-pagination',
        loop:true,
        autoplayDisableOnInteraction:false
      })
    }
    $scope.headerSlideData =[
      {
      alt: "双十一预热主场会",
      src: "img/home/home-headerSlide-1.jpg"
    }, {
      alt: "11月11天家电低价不停歇",
      src: "img/home/home-headerSlide-2.jpg"
    }, {
      alt: "家具盛典 好货提前抢",
      src: "img/home/home-headerSlide-3.jpg"
    }, {
      alt: "IT抢券节",
      src: "img/home/home-headerSlide-4.jpg"
    }, {
      alt: "潮流数码 双11爽购攻略",
      src: "img/home/home-headerSlide-5.jpg"
    }];

    //京东头条轮播图
    function toutiaoSlide(){
      new Swiper('#toutiaoSlider',{
        autoplay:1000,
        direction:'vertical',
        loop:true,
        autoplayDisableOnInteraction:false
      })
    }

    //限时秒杀
    function timeSecKill(){
      var timeLeft = {h:2,m:2,s:10}
      var timer = $interval(function () {
        if(timeLeft.s>0){
          timeLeft.s--;
        }else if(timeLeft.m>0) {
          timeLeft.m--;
          timeLeft.s=59;
        }else if(timeLeft.h>0) {
          timeLeft.h--;
          timeLeft.m=59;
          timeLeft.s=59;
        }
        $scope.hour = {
          A:getTime().a(timeLeft.h),
          B:getTime().b(timeLeft.h)
        }
        $scope.minute = {
          A:getTime().a(timeLeft.m),
          B:getTime().b(timeLeft.m)
        }
        $scope.second = {
          A:getTime().a(timeLeft.s),
          B:getTime().b(timeLeft.s)
        }


      },1000)

      function getTime(time){
        return {
          a: function (time) {
            if(time>=10){
              return parseInt(time/10)
            }else {
              return 0;
            }
          },
          b: function (time) {
            if(time>=10){
              return time%10;
            }else {
              return time;
            }
          }
        }
      }


    }

    //顶部颜色渐变
    function topColorChange(){
      var content = document.getElementById('home-content')
      var headBar = document.getElementById('headerBar-bg')
      var nowOpacity = 0;
      content.onscroll = function () {
        nowOpacity = this.scrollTop/500;
        headBar.style.opacity = nowOpacity;

      }
    }

    //回到顶部功能
    function goTop(){
      var content = document.getElementById('home-content');
      var goTop = document.querySelector('.back_top');
      content.addEventListener('scroll', function () {
        if(this.scrollTop>=250){
          goTop.style.display = 'block';
          goTop.style.opacity = 1;

        }else {
          goTop.style.display = 'none';
        }
      })
      goTop.onclick = function () {
        content.scrollTop = 0;
      }
    }

    //$scope.$on('$ionicView.enter', function () {
    //  headerSlide();
    //  jdHeaderSlide();
    //  timedSeckill();
    //  topColorChange()
    //})
    //function headerSlide(){
    //  var headerSlider = new Swiper('#headerSlider',{
    //    autoplay:1000,
    //    pagination:'swiper-pagination',
    //    loop:true,
    //    autoplayDisableOnInteraction:false
    //  })
    //}
    //function jdHeaderSlide(){
    //
    //}
    //function timedSeckill(){
    //  var timeLeft = {h:1,m:20,s:10};
    //  var timer = $interval(function () {
    //    if(timeLeft>0){
    //      timeLeft.s--;
    //    }else if(timeLeft.m>0){
    //      timeLeft.m--;
    //      timeLeft.s=59;
    //    }else if(timeLeft.h>0){
    //      timeLeft.h--;
    //      timeLeft.m=59;
    //      timeLeft.s=59;
    //    }
    //    console.log(timeLeft);
    //  },1000)
    //}
    //
    //
    ////顶部颜色渐变
    //function topColorChange(){
    //  var content = document.getElementById('home-content');
    //  var nowOpacity = 0;
    //  var headBar = document.getElementById('headerBar-bg')
    //  content.onscroll = function () {
    //    nowOpacity = this.scrollTop/500;
    //    headBar.style.opacity = nowOpacity;
    //  }
    //}
    //$scope.headerSlideData = [{
    //  alt: "双十一预热主场会",
    //  src: "img/home/home-headerSlide-1.jpg"
    //}, {
    //  alt: "11月11天家电低价不停歇",
    //  src: "img/home/home-headerSlide-2.jpg"
    //}, {
    //  alt: "家具盛典 好货提前抢",
    //  src: "img/home/home-headerSlide-3.jpg"
    //}, {
    //  alt: "IT抢券节",
    //  src: "img/home/home-headerSlide-4.jpg"
    //}, {
    //  alt: "潮流数码 双11爽购攻略",
    //  src: "img/home/home-headerSlide-5.jpg"
    //}];
  })
})(angular);
