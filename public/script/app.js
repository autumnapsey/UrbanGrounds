$(document).ready(function(){

	$("#downtown").scrollTo("#coffeePicker"[300]);
	$("#midtown").scrollTo("#coffeePicker"[300]);
	$("#corktown").scrollTo("#coffeePicker"[300]);
	$("#newcenter").scrollTo("#coffeePicker"[300]);
	$("#easternMarket").scrollTo("#coffeePicker"[300]);

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
