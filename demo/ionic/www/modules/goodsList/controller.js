/**
 * Created by admin on 2016/7/10.
 */
(function (angular) {
  var app = angular.module('goodsList.controller',['goodsList.services'])
  app.controller('goodsListCtrl', function ($scope,goodsListService) {
    //console.log(goodListService.getDataList());

    refreshGoodsList();
    function refreshGoodsList(){
      var promise = goodsListService.getDataList();
      promise.then(function (data) {
        $scope.obj_goodsListData = data;
        console.log(data);
      })
    }
    $scope.refreshGoodsList = function () {
      refreshGoodsList();
      $scope.$broadcast('scroll.refreshGoodsList')
    }

    $scope.loadMoreGoodsList = function () {
      var newData = goodsListService.getMoreGoodsList()
      $scope.obj_goodsListData = $scope.obj_goodsListData.concat(newData);
      $scope.$broadcast('scroll.infiniteScrollComplete')
    }

  })
})(angular)
