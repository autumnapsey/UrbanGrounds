$(document).ready(function(){
<<<<<<< HEAD
	$.backstretch("../images/coffeebg.jpeg");
});

var app = angular.module('app',['ngRoute', 'ngDialog']);
=======
	$.backstretch("../images/coffeeGrey.png");
});

var app = angular.module('app',['ngRoute']);
>>>>>>> eebd554c3ec113af181f1f290ecceab0295a2325

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

