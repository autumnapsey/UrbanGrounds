var app = angular.module('app');

app.controller('selectCtrl', function($scope, coffeeService, $location, ngDialog) {

	var lastElement = {};
	// $scope.chooseShop = function (region,num){
	// 	coffeeService.getShop(region,num);
	// 	$location.path('/coffeeshop')
	// };

	$scope.places = coffeeService.places;

	$scope.chooseInterest = function(interest){
		$scope.places = coffeeService.selectCategory(interest);
	};

	$scope.class = "icon";

	$scope.changeClass = function(event){
		var element = event.target;
		if(isObjectEmpty(lastElement)){
			$(lastElement).removeClass('chosenIcon').addClass('icon');
		}

		$(element).addClass("chosenIcon");

		lastElement = event.target;
	}

	function isObjectEmpty(element){
		return Object.keys(lastElement).length > 0;
	}

	$scope.showDowntown = function (){
		console.log('1. showDowntown on selectCtrl');
		coffeeService.showDowntown();
	}

	$scope.clickToOpen = function (){
        ngDialog.open({ 
        	template: '../view/modal.html', 
        	className: 'ngdialog-theme-default' 
        });
    };
});
