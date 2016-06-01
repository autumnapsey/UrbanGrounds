var app = angular.module('app');

app.controller('selectCtrl', function($scope, coffeeService, $location) {
	var lastElement = {};

	$scope.chooseShop = function (region,num){
		coffeeService.getShop(region,num);
		$location.path('/coffeeshop')
	};

	$scope.places = coffeeService.places;

	$scope.downtownList = false;
	$scope.midtownList = false;
	$scope.newcenterList = false;
	$scope.corktownList = false;
	$scope.easternMarketList = false;
	

	$scope.chooseInterest = function(interest){
		console.log('a;sdlfjkas;dlfjk')
		$scope.places = coffeeService.selectCategory(interest);
	};

	$scope.class = "icon";
	$scope.changeClass = function(event){
		console.log(event);
		var element = event.target;
		if(isObjectEmpty(lastElement)){
			$(lastElement).removeClass('chosenIcon').addClass('icon');
		}

		$(element).addClass("chosenIcon");

		lastElement = event.target;
	}

	function isObjectEmpty(element) {
		return Object.keys(lastElement).length > 0;
	}

});
