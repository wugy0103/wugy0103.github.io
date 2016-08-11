/**
 * Created by admin on 2016/7/4.
 */
(function (angular) {
    var app = angular.module('moviecat.service.http',[]);
    app.service('httpService',['$window', function ($window) {
        this.jsonp = function (url, params, callback) {
            var queryStr = '';
            for(var key in params){
                queryStr += key + '=' +params[key]+'&'
            }
            var cbname = 'jsonp_'+Math.random().toString().substr(2)+'_'+(new Date()).getTime();
            console.log(cbname);
            $window[cbname] = function (data) {
                callback(data);
                $window.document.body.removeChild(script);
            }
            url = url + '?' + queryStr +'callback='+cbname;
            var script = $window.document.createElement('script');
            script.src = url;
            $window.document.body.appendChild(script);
        }
    }])




})(angular)

//(function(angular){
//    'use sctrict';
//    var app = angular.module('moviecat.service.http',[]);
//    app.service('httpService',['$window',function($window){
//        this.jsonp=// ��װjsonp����
//            function crossDomain(url,params,callback){
//                // 1.ƴ��url�����������ص�����
//                var queryString='';
//                for(var key in params){
//                    queryString+= key +'='+ params[key]+'&'
//                }
//                url = url+'?'+ queryString;
//
//                var cbName = 'jsonp_'+ Math.random().toString().substr(2);//  0.3232
//                //{}['aaa']
//                //window.jsonp_2182192=callback;
//                $window[cbName]=function(data){
//                    callback(data);
//                    $window.document.body.removeChild(scriptElement);
//                };
//                url= url +'callback='+cbName;
//                // 2.��̬�Ĵ���script��ǩ,����src����
//                var scriptElement=$window.document.createElement('script');
//                scriptElement.src=url;
//                // 3.��script��ǩ���뵽ҳ����
//                $window.document.body.appendChild(scriptElement);
//            }
//    }]);
//})(angular)