var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../view/landing.html',
		controller: 'selectCtrl'
	})
	.when('/coffeeshop', {
		templateUrl: '../view/selectCtrl.html',
		controller: 'displayCtrl'
	});
});