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
	$scope.westVillageList = false;
	$scope.hamtramckList = false;
	$scope.easternMarketList = false;
	$scope.rosedaleParkList = false;

	$scope.chooseInterest = function(interest){
		console.log('a;sdlfjkas;dlfjk')
		$scope.places = coffeeService.selectCategory(interest);
	};




	$scope.class = "icon";
	$scope.changeInterestClass = function(event){
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
	};




	$scope.neighbourhoodClass = "neighbourhoodIcon";
	$scope.changeNeighbourhoodClass = function(event){
		console.log(event);
		var neighbourhoodElement = event.target;
		if(isNeighbourhoodObjectEmpty(lastNeighbourhoodElement)){
			$(lastNeighbourhoodElement).removeClass("chosenNeighbourhoodIcon").addClass("neighbourhoodIcon");
		}

		$(neighbourhoodElement).addClass("chosenNeighbourhoodIcon");

		lastNeighbourhoodElement = event.target;

	}

	function isNeighbourhoodObjectEmpty(neighbourhoodElement) {
		return Object.keys(lastneighbourhoodElement).length > 0;
	}


});
