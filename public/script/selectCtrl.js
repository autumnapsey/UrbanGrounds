var app = angular.module('app');

app.controller('selectCtrl', function($scope, coffeeService, $location, ngDialog) {
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
		$scope.places = coffeeService.selectCategory(interest);
	}

	$scope.clickToOpen = function (){
        ngDialog.open({ 
        	template: '../view/modal.html', 
        	className: 'ngdialog-theme-default' 
        });
        console.log($scope.downtownList);
    };

});
