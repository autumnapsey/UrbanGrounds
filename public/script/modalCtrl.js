var app = angular.module('app');


app.controller('modalCtrl', function($scope, coffeeService, ngDialog){

	$scope.chooseShop = function (region,num){
		coffeeService.getShop(region,num);
		$location.path('/coffeeshop')
	};

	$scope.places = coffeeService.places;


	$scope.getList = function(){
		console.log('4. getList on modal page!');	
		console.log('5. ' + coffeeService.neighborhoodValues.downtownList);
		return coffeeService.neighborhoodValues.downtownList;
	}

	$scope.clickForAbout = function (){
        ngDialog.open({ 
        	template: '../view/about.html', 
        	className: 'ngdialog-theme-default',
        	width: '80%' 
        });
    };
});