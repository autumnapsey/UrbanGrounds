var app = angular.module('app');

app.controller('selectCtrl', function($scope, coffeeService, $location) {
	$scope.chooseShop = function (region,num){
		console.log(region);
		coffeeService.getShop(region,num);
		$location.path('/coffeeshop')
	};

	$scope.places = coffeeService.places;

	$scope.downtownList = false;
	$scope.midtownList = false;
	$scope.newcenterList = false;
	$scope.corktownList = false;
	$scope.westVillageList = false;
	$scope.jeffersonList = false;
	$scope.hamtramckList = false;
	$scope.easternMarketList = false;
	$scope.rosedaleParkList = false;

	// $scope.music = false;
	// $scope.work = false;
	// $scope.social = false;
	// $scope.art = false;
	// $scope.food = false;

	$scope.categoryChoice = function(topic){

	}
});