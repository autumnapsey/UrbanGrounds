$(document).ready(function(){
	$.backstretch("../images/coffeebg.jpeg");
});


var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
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