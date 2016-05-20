var app = angular.module('app');

app.controller('selectCtrl', function($scope, coffeeService) {
	console.log('hello from the selectCtrl!');
	console.log(coffeeService);
});