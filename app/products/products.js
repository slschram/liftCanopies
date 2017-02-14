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

      // Variables to filter the table data
      $scope.sortType = 'productNumber'; // set the default sort type
      $scope.sortReverse = false;  // set the default sort order
      $scope.searchFish = '';     // set the default search/filter term

    }).error(function(data, status, headers, config) {
  });
}]);

// console.log($scope.data);