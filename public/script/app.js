$(document).ready(function(){
<<<<<<< HEAD
<<<<<<< HEAD
	$.backstretch("../images/coffeebg.jpeg");
});

var app = angular.module('app',['ngRoute', 'ngDialog']);
=======
=======

>>>>>>> ca8b426ec73e9a6fea0c9a1587638c581a63cbf7
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

