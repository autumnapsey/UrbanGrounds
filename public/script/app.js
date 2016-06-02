$(document).ready(function(){
	$.backstretch("../images/coffeeGrey.png");
});

var app = angular.module('app',['ngRoute', 'ngDialog']);

app.config(function($routeProvider, $sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
	  // Allow same origin resource loads.
	  'self',
	  // Allow loading from our assets domain.  Notice the difference between * and **.
	  'https://snapwidget.com/embed/**'
	]);

	$routeProvider
	.when('/', {
		templateUrl: '../view/landing.html',
		controller: 'selectCtrl'
	})
	.when('/coffeeshop', {
		templateUrl: '../view/coffee.html',
		controller: 'displayCtrl'
	});
});
