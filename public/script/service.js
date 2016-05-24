var app = angular.module('app');

app.factory('coffeeService', function($http){
	var places = [{
		placeID:'ChIJtzwfLTItO4gRxwpKgcgFomE',
		description: 'blah',
		music: true,
		work: true,
	}, //ASHE
	'ChIJt7odBjEtO4gRgRETxl3QoLE', //Urban Bean
	'ChIJUwca7i8tO4gRC6azALL0VXY', //Roasting Plant
	'ChIJs1AnRCUtO4gRIazc_Vjj-ss', //Rowland Cafe
	'ChIJzZVcTTAtO4gRe5sIIK-MgJs', //Dessert Oasis
	'ChIJdyYY-zotO4gRSkl3yFB0L4U', //Bean Bar
	'ChIJOZ_JV6XSJIgRuE7W1bI52bY', //Bottom Line
	'ChIJ8Vn3cL3SJIgRAN16yJ9YXVc', //Fourteen East
	'ChIJi82DCLjSJIgRVh34r-ayWs0', //Great Lakes 
	'ChIJG1njurDSJIgRQOyfZl8DS3U', //Avalon
	'ChIJKZ7aELnSJIgRxwOrLDpqooQ', //SoCRA Tea
	'ChIJ1_NMup3SJIgRLGWCLLzG3q4', //Cafe Con Leche
	'ChIJ-cn5BZ3SJIgR9qtC5wf-TtY', //Stella 
	'ChIJQZSTxVktO4gR_qjDkKNYauk', //Astro
	'ChIJp-Jg8VwtO4gRJKYZBSShFTg', //Anthology
	'ChIJY2gfQ17TJIgRCC-Ib8eakH8', //Red Hook
	'ChIJ6eXdWAfVJIgRw_BSGXWh7gs', //Coffee and ()
	'ChIJw-es3tXSJIgRnzz7A_tsOOQ', //Trinosophes
	'ChIJZS3wv9bSJIgRMcmDKePqdLQ', //Germack
	'ChIJ5aZkHGrKJIgR7-jlmpGsSH4', //Always Brewing

	];

	var selectedShop;

	function getLink() {
		return $http.get(
"https://maps.googleapis.com/maps/api/place/details/json?placeid=" + places[selectedShop].placeID + "&key=AIzaSyB3qOjxMH_B5zFUt9V4KKU0_MgXaXDd26o")}


	return {
		getLink: getLink,
		getShop: function(shop){
			selectedShop = shop;
		},
		places: places
	}
});
