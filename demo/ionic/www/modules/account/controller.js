/**
 * Created by admin on 2016/7/11.
 */
(function (angular) {
  var app = angular.module('account.controller',['account.services']);
  app.controller('accountCtrl', function ($scope,$ionicActionSheet,$cordovaCamera,$window) {

    $scope.$on('$ionicView.enter', function () {
      //加载已保存的头像
      setPic();
    })
    function setPic(){
      var img = document.getElementById('touxiang');
      img.src = "data:image/jpeg;base64,"+localStorage.touxiang;
    }
    //弹出actionsheet
    $scope.showActionSheet = function () {
      $ionicActionSheet.show({
        buttons:[
          {text:'打开相机'},
          {text:'打开相册'}
        ],
        buttonClicked: function (index) {
          switch(index){
            case 0:
              getPic('camera');
              break;
            case 1:
              getPic();
              break;
          }
        },
        cancelText:'取消'

      })
      function getPic(type){
        console.log('调用相机')
        var sourceType;
        if(type&&type=='camera'){
          sourceType=Camera.PictureSourceType.CAMERA
        }
        var options = {
          quality: 100,// 图片质量
          destinationType: Camera.DestinationType.DATA_URL,// 读取到的图片的数据类型,读取图片为base64编码
          sourceType:sourceType || Camera.PictureSourceType.PHOTOLIBRARY,
            //Camera.PictureSourceType.PHOTOLIBRARY,// 图片的来源的，这是表示相册
          // sourceType: Camera.PictureSourceType.CAMERA,// 这个表示来源是相机
          allowEdit: true,// 是否允许编辑
          encodingType: Camera.EncodingType.JPEG,// 图片编码类型,jpeg
          targetWidth: 100,// 图片宽度
          targetHeight: 100, // 图片高度
          popoverOptions: CameraPopoverOptions, // 弹出框类型
          saveToPhotoAlbum: false, // 是否保存到相册
          correctOrientation:true  // 是否允许调整方向
        };
        $cordovaCamera.getPicture(options).then(function(imageData){
          // imageData是图片base64编码后的数据
          // 获取页面的img对象
          var image = document.getElementById('touxiang');
          // 设置其src属性
          // base64编码
          image.src="data:image/jpeg;base64,"+imageData;

          // 存储到本地存储
          localStorage["touxiang"]=imageData;// 是只能存储字符
        },function(err){
          // 此处是发生错误时的回调.
        });
      }

    }
    //拨打电话
    $scope.callPhone = function (number) {
      $window.location.href = "tel:"+number;
      console.log('拨打电话')
    }
    //退出应用
    $scope.exitApp = function () {
      ionic.Platform.exitApp();
    }
  })
})(angular)
