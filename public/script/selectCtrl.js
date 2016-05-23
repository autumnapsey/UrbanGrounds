var app = angular.module('app');


app.controller('selectCtrl', function($scope, coffeeService, $location) {
	console.log('Hi from selectCtrl');
	$scope.chooseShop = function (num){
		console.log(num);
		coffeeService.getShop(num);
		$location.path('/coffeeshop')
	};
	$scope.downtownList = false;
	$scope.midtownList = false;
	$scope.newcenterList = false;
	$scope.corktownList = false;

});
