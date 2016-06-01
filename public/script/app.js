$(document).ready(function(){
	$.backstretch("../images/coffeeGrey.png");
});

var app = angular.module('app',['ngRoute', 'ngDialog']);

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

app.controller('footerCtrl', function($scope, ngDialog){
	$scope.clickForAbout = function (){
        ngDialog.open({ 
        	template: '../view/about.html', 
        	className: 'ngdialog-theme-default',
        	width: '80%' 
        });
    };
})