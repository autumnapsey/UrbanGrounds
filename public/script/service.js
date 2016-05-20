var app = angular.module('app');

app.factory('coffeeService', function($http){
	return $http.get(
"https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJtzwfLTItO4gRxwpKgcgFomE&key=AIzaSyB3qOjxMH_B5zFUt9V4KKU0_MgXaXDd26o")

});
