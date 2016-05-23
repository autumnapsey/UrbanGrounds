var app = angular.module('app');

<<<<<<< HEAD
=======

app.controller('selectCtrl', function($scope, coffeeService) {
	console.log('hello from the selectCtrl!');
	console.log(coffeeService);
});


>>>>>>> 7d329efc0b19394d9314f508aaf8ccdb29b2fe58

app.controller('selectCtrl', function($scope, coffeeService, $location) {
	console.log('Hi from selectCtrl');
	$scope.chooseShop = function (num){
		console.log(num);
		coffeeService.getShop(num);
		$location.path('/coffeeshop')
	};
	$scope.downtownList = false;
	$scope.midtownList = false;
	$scope.newcenterList = false;
	$scope.corktownList = false;
<<<<<<< HEAD

});
=======
	$scope.westVillageList = false;
	$scope.jeffersonList = false;
	$scope.hamtramckList = false;
	$scope. easternMarketList = false;
	$scope.rosedaleParkList = false;
});















>>>>>>> 7d329efc0b19394d9314f508aaf8ccdb29b2fe58
