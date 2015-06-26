'use strict';

/* jshint -W098 */
angular.module('mean.game').controller('GameController', ['$scope', 'Global', 'Game',$http
  function($scope, Global, Game, $http) {

   $scope.email_sent_status=false;
   $scope.table_result_status=false;
   $scope.table_result=false;
   $scope.email_status=false;
   $scope.send_email =function(email){
   $http({
           method: 'GET',
           url: '/api/game/send_mail?name='+$scope.email_name+'&email='+email+'&score='+score,
           headers: {
             'content-type': 'application/json; charset=utf-8',
             'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
           }
         }).success(function (data) {
           if (data) {
             $scope.time=$scope.user_id=$scope.event=$scope.event_type=$scope.product_id=$scope.price=$scope.phrase=$scope.order_id="";
             $scope.info_show = true;
             $scope.user=data;
           }
         }).error(function (data, status, headers, config) {
           $scope.status_code = status;
           $scope.info_error = false;
           $scope.info_show = false;
         });

   }

   $scope.insert= function(name,score){
   }
   $scope.top_three= function(){
   }





    $scope.global = Global;
    $scope.package = {
      name: 'game'
    };
  }
]);
