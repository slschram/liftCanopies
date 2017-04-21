'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProductsCtrl'
  });
}])

.controller('ProductsCtrl', ['$scope', '$rootScope', '$location', '$http', 'shareDataService', function($scope, $rootScope, $location, $http, shareDataService) {
  return $http.get('./products.json').
    success(function(data) {
      $scope.data = data;

      // Variables to filter the table data
      $scope.sortType = 'productNumber'; // set the default sort type
      $scope.sortReverse = false;  // set the default sort order
      $scope.searchProducts = '';     // set the default search/filter term

      $scope.selectItem = function (object) {
        $scope.selectedObject = object;
        console.log("passing: " + object);
        shareDataService.setCurrentProduct(object);
        $location.path( '/order' );
      };

    }).error(function(data, status, headers, config) {
  });
}]);

// console.log($scope.data);
