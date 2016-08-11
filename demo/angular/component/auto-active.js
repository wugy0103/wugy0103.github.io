/**
 * Created by admin on 2016/7/4.
 */
(function (angular) {
    var app = angular.module('moviecat.auto-active',[]);
    app.directive('autoActive',['$location',function ($location) {
        return {
            //templateUrl: "../movie_list/view.html",
            //restrict:'CAME',
            //replace:true,
            //transclude:true,
            //scope:{
            //    name:'@'
            //},
            link: function (scope,element,attributes) {
                //element.on('click', function () {
                //    element.parent().children().removeClass('active');
                //    element.addClass('active');
                //})
                scope.loca = $location
                scope.$watch('loca.url()', function (newVal, oldVal) {
                    var hash = element.children()[0].href.split('#')[1];
                    if(newVal.startsWith(hash)){
                        element.parent().children().removeClass('active');
                        element.addClass('active');
                    }
                })
            }

        }

    }])

})(angular)