'use strict';

angular.module('myApp.order', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order', {
    templateUrl: 'order/order.html',
    controller: 'OrderCtrl'
  });
}])

.controller('OrderCtrl', ['$scope', '$rootScope', 'shareDataService', function($scope, $rootScope, shareDataService) {
  $scope.product = shareDataService.getCurrentProduct();
}]);
