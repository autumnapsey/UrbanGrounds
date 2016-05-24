var app = angular.module('app');

app.controller('selectCtrl', function($scope, coffeeService, $location) {
	console.log('Hi from selectCtrl');
	$scope.chooseShop = function (num){
		coffeeService.getShop(num);
		$location.path('/coffeeshop')
	};

	$scope.downtownList = false;
	$scope.midtownList = false;
	$scope.newcenterList = false;
	$scope.corktownList = false;
	$scope.westVillageList = false;
	$scope.jeffersonList = false;
	$scope.hamtramckList = false;
	$scope.easternMarketList = false;
	$scope.rosedaleParkList = false;
});