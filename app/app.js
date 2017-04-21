'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.about',
  'myApp.products',
  'myApp.order',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/about'});
}])
.controller('mycontroller', function($scope) {
  $scope.showMoreFunc = function(view) {
    if(view == "about") {
        $scope.about = true;
        $scope.products = false;
        $scope.order = false;
    } else if (view == "products") {
        $scope.products = true;
        $scope.about = false;
        $scope.order = false;
    } else {
        $scope.order = true;
        $scope.about = false;
        $scope.products = false;
    }
  };
})
.service('shareDataService', function() {
  var currentProduct;
  var setCurrentProduct = function(data){
    currentProduct = data;
    console.log("currentProduct: " + currentProduct);
    return currentProduct;
  }
  var getCurrentProduct = function(){
    return currentProduct;
  }
  return {
    setCurrentProduct: setCurrentProduct,
    getCurrentProduct: getCurrentProduct
  };
});;
