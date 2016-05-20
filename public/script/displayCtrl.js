var app = angular.module('app');

app.controller('displayCtrl', function($scope, coffeeService) {
	coffeeService.then(function(location){
		$scope.coffeeShop = location.data.result;
		console.log(location);
	});
});