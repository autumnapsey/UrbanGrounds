var app = angular.module('app');

app.controller('selectCtrl', function($scope, coffeeService, $location) {

// jQuery scrollTo events
	$('#downtown').click(function(){
		console.log('screen should scroll');
		$(window).scrollTo($("#coffeePicker"),800);
	});
	$('#midtown').click(function(){
		console.log('screen should scroll');
		$(window).scrollTo($("#coffeePicker"),800);
	});
	$('#corktown').click(function(){
		console.log('screen should scroll');
		$(window).scrollTo($("#coffeePicker"),800);
	});
	$('#newcenter').click(function(){
		console.log('screen should scroll');
		$(window).scrollTo($("#coffeePicker"),800);
	});
	$('#easternMarket').click(function(){
		console.log('screen should scroll');
		$(window).scrollTo($("#coffeePicker"),800);
	});
// end events

	var lastElement = {};
	var lastNeighbourhoodElement = {};

	$scope.chooseShop = function (region,num){
		coffeeService.getShop(region,num);
		$location.path('/coffeeshop')
	};

	$scope.places = coffeeService.places;

	$scope.neighborhoods = {
		downtown: false,
		midtown: false,
		newCenter: false,
		corktown: false,
		easternMarket: false
	};

	$scope.showNeighborhoodShops = function(neighborhood) {
		$scope.neighborhoods[neighborhood] = true;
		for (hood in $scope.neighborhoods){ // for (key in obj){}
			console.log(hood, neighborhood);
			if(hood !== neighborhood) {
				$scope.neighborhoods[hood] = false;
			}
		}
		console.log($scope.neighborhoods);
	}


	$scope.chooseInterest = function(interest){
		// console.log('a;sdlfjkas;dlfjk')
		$scope.places = {};
		$scope.places = coffeeService.selectCategory(interest);

	};




	$scope.class = "icon";
	$scope.changeInterestClass = function(event){
		// console.log(event);
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
		// console.log(event);
		var element = event.target;
		if(isNeighbourhoodObjectEmpty(lastNeighbourhoodElement)){
			$(lastNeighbourhoodElement).removeClass("chosenNeighbourhoodIcon").addClass("neighbourhoodIcon");
		}

		$(element).addClass("chosenNeighbourhoodIcon");

		lastNeighbourhoodElement = event.target;

	}

	function isNeighbourhoodObjectEmpty(element) {
		return Object.keys(element).length > 0;
	}


});
