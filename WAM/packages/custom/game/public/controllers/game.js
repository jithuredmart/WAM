'use strict';

/* jshint -W098 */
angular.module('mean.game').controller('GameController', ['$scope', 'Global', 'Game',
  function($scope, Global, Game) {
    $scope.global = Global;
    $scope.package = {
      name: 'game'
    };
  }
]);
