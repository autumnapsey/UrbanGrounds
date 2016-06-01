var app = angular.module('app');


app.controller('modalCtrl', function($scope, coffeeService, ngDialog){

	$scope.chooseShop = function (region,num){
		coffeeService.getShop(region,num);
		$location.path('/coffeeshop')
	};

	$scope.places = coffeeService.places;

	$scope.listFromCategory = function(){
		var interest = coffeeService.chosenInterest();
		console.log("4." + interest);
		coffeeService.selectCategory(interest);
		console.log('5. '+ coffeeService.selectCategory(interest));
		return $scope.places = coffeeService.selectCategory(interest);
	}

	$scope.getList = function(list){
		// coffeeService.selectCategory(interest);
		console.log('6. ' + coffeeService.neighborhoodValue()[list]);
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