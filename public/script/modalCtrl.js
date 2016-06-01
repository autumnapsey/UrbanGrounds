var app = angular.module('app');


app.controller('modalCtrl', function($scope, coffeeService, ngDialog, $location){

	$scope.chooseShop = function(region,num){
		console.log('modalCtrl chooseShop firing');
		coffeeService.getShop(region,num);
		$location.path('/coffeeshop');
	};

	$scope.places = coffeeService.places;

	$scope.listFromCategory = function(){
		var interest = coffeeService.chosenInterest();
		coffeeService.selectCategory(interest);
		return $scope.places = coffeeService.selectCategory(interest);
	}

	$scope.getList = function(list){
		return coffeeService.neighborhoodValue()[list];
	}

	$scope.clickForAbout = function (){
        ngDialog.open({ 
        	template: '../view/about.html', 
        	className: 'ngdialog-theme-default',
        	width: '80%' 
        });
    };
});