var app = angular.module('app');

app.factory('coffeeService', function($http){
	var places = [
	'ChIJtzwfLTItO4gRxwpKgcgFomE', //ASHE
	'ChIJt7odBjEtO4gRgRETxl3QoLE', //Urban Bean
	];

	var selectedShop;

	function getLink() {
		return $http.get(
"https://maps.googleapis.com/maps/api/place/details/json?placeid=" + places[selectedShop] + "&key=AIzaSyB3qOjxMH_B5zFUt9V4KKU0_MgXaXDd26o")}


	return {
		getLink: getLink,
		getShop: function(shop){
			selectedShop = shop;
		}
	}
});
