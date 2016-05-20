var app = angular.module('app');

app.controller('selectCtrl', function($scope, coffeeService, $location) {
	console.log('Hi from selectCtrl');
	$scope.chooseShop = function (num){
		console.log(num);
		coffeeService.getShop(num);
		$location.path('/coffeeshop')
	}
});