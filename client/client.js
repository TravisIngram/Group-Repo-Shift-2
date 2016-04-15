var app = angular.module("greenApp", []);

// app.controller("GreenController", ["$scope", "$http", function($scope, $http) {
//   $scope.usersList = [];
//   $scope.getInfo = function(){
//     // console.log("click");
//     $http.get("/create").then(function(response) {
//     console.log('data for /create',response.data);
//     $scope.usersList = [];
//     $scope.usersList = response.data;
//       });
//    };
// }])

// Swap in `controller - as` syntax

  app.controller("GreenController", ["$http", function($http) {
  	var person = this;

  	person.usersList = [];

  	person.getInfo = function(){
    // console.log("click");
    	$http.get("/create").then(function(response) {
    		console.log('data for /create',response.data);
    		person.usersList = [];
    		person.usersList = response.data;
      });
   };
}]);