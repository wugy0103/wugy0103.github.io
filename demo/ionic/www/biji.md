### <ion-nav-view></ion-nav-view> 是对ui-view的二次封装
  - 路由app.config(function($stateProvider){
    templateUrl相对于app.js的父级目录
    $stateProvider.state('guidePage',{
          url:'/guidePage',
          templateUrl:'modules/guidePage/view.html',
          
        })
  
  })
  - 全局变量app.constant('name',{})
  - 配置 app.config(function($ionicConfigProvider){})