var app = angular.module('app');

app.controller('displayCtrl', function($scope, coffeeService) {
	coffeeService.getLink().then(function(location){
		$scope.coffeeShop = location.data.result;
		$scope.getDescription = coffeeService.getDescription;
		$scope.openNow = function(){
			if(location.data.result.opening_hours.open_now === true){
				return "Open Now";
			} else {
				return "Currently Closed";
			}
		};
	});
});