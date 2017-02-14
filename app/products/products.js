'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProductsCtrl'
  });
}])

.controller('ProductsCtrl', ['$scope', '$http', function($scope, $http) {
  return $http.get('./products.json').
    success(function(data) {
      $scope.data = data;
      // console.log(data);
    }).error(function(data, status, headers, config) {
  });
}]);

// console.log($scope.data);
