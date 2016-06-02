var app = angular.module('app');

app.controller('selectCtrl', function($scope, coffeeService, $location) {
	
	
$(document).ready(function(){
	$('#downtown').hover(function(){
		$('.map').attr('src', '/images/mapSections/mapSelectDowntown.png');
		}, function() {
		});
		$('.map').attr('src','/images/mapSections/mapSelectAll.png');
	

	$('#corktown').hover(function(){
		$('.map').attr('src', '/images/mapSections/mapSelectCorktown.png');
		}, function() {
		$('.map').attr('src','/images/mapSections/mapSelectAll.png');
	});

	$('#easternMarket').hover(function(){
		$('.map').attr('src', '/images/mapSections/mapSelectEasternMarket.png');
		}, function() {
		$('.map').attr('src','/images/mapSections/mapSelectAll.png');
	});

	$('#newCenter').hover(function(){
		$('.map').attr('src', '/images/mapSections/mapSelectNewCenter.png');
		}, function() {
		$('.map').attr('src','/images/mapSections/mapSelectAll.png');
	});

	$('#midtown').hover(function(){
		$('.map').attr('src', '/images/mapSections/mapSelectMidtown.png');
		}, function() {
		$('.map').attr('src','/images/mapSections/mapSelectAll.png');
	});
});


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
