var app = angular.module('app');

app.factory('coffeeService', function($http){
	var places = [
		[ //Downtown (0)
			{
			name: 'ASHE Supply Co.',
			placeID: 'ChIJtzwfLTItO4gRxwpKgcgFomE',
			description: '',
			features: ''
			},
			{
			name: 'Urban Bean Co.',
			placeID: 'ChIJt7odBjEtO4gRgRETxl3QoLE',
			description: '',
			features: ''
			},
			{
			name: 'Roasting Plant',
			placeID: 'ChIJUwca7i8tO4gRC6azALL0VXY',
			description: '',
			features: ''
			},
			{
			name: 'Rowland Cafe',
			placeID: 'ChIJs1AnRCUtO4gRIazc_Vjj-ss',
			description: '',
			features: ''
			},
			{
			name: 'Dessert Oasis',
			placeID: 'ChIJzZVcTTAtO4gRe5sIIK-MgJs',
			description: '',
			features: ''
			},
			{
			name: 'The Bean Bar',
			placeID: 'ChIJdyYY-zotO4gRSkl3yFB0L4U',
			description: '',
			features: ''
			}
		],
		[  //Midtown (1)
			{
			name: 'The Bottom Line',
			placeID: 'ChIJOZ_JV6XSJIgRuE7W1bI52bY',
			description: '',
			features: ''
			},
			{
			name: 'Fourteen East',
			placeID: 'ChIJ8Vn3cL3SJIgRAN16yJ9YXVc',
			description: '',
			features: ''
			},
			{
			name: 'Great Lakes Coffee',
			placeID: 'ChIJi82DCLjSJIgRVh34r-ayWs0',
			description: '',
			features: ''
			},
			{
			name: 'Avalon',
			placeID: 'ChIJG1njurDSJIgRQOyfZl8DS3U',
			description: '',
			features: ''
			},
			{
			name: 'SoCRA Tea',
			placeID: 'ChIJKZ7aELnSJIgRxwOrLDpqooQ',
			description: '',
			features: ''
			}],
		[ //New Center(2)
			{
			name: 'Cafe Con Leche Nord',
			placeID: 'ChIJKZ7aELnSJIgRxwOrLDpqooQ',
			description: '',
			features: ''
			},
			{
			name: 'Stella International Cafe',
			placeID: 'ChIJKZ7aELnSJIgRxwOrLDpqooQ',
			description: '',
			features: ''
			}],
		[ //Corktown(3) 
		{
			name: 'Astro Coffee',
			placeID: 'ChIJQZSTxVktO4gR_qjDkKNYauk',
			description: '',
			features: ''
			},
			{
			name: 'Anthology Coffee',
			placeID: 'ChIJp-Jg8VwtO4gRJKYZBSShFTg',
			description: '',
			features: ''
			}],
		[ //West Village (4)
			{
			name: 'The Red Hook',
			placeID: 'ChIJY2gfQ17TJIgRCC-Ib8eakH8',
			description: '',
			features: ''
			}],
		[ //Jefferson/Chalmers(5)
			{
			name: 'Coffee and (___)',
			placeID: 'ChIJ6eXdWAfVJIgRw_BSGXWh7gs',
			description: '',
			features: ''
			}],
		[ //Eastern Market(6)
			{
			name: 'Trinosophes',
			placeID: 'ChIJw-es3tXSJIgRnzz7A_tsOOQ',
			description: '',
			features: ''
			},
			{
			name: 'Germack Coffee Roasting Co.',
			placeID: 'ChIJZS3wv9bSJIgRMcmDKePqdLQ',
			description: '',
			features: ''
			}],
		[ //Rosedale Park(7)
			{
			name: 'Always Brewing Detroit',
			placeID: 'ChIJ5aZkHGrKJIgR7-jlmpGsSH4',
			description: '',
			features: ''
			}
		]
		[ //Hamtramck(8)
			{
			name: 'Cafe 1923',
			placeID: 'ChIJHS1-WWjSJIgR9OXqeGytqE0',
			description: '',
			features: ''
			}
		]
	];

	var selectedShop;

	function getLink() {
		return $http.get(
"https://maps.googleapis.com/maps/api/place/details/json?placeid=" + selectedShop.placeID + "&key=AIzaSyB3qOjxMH_B5zFUt9V4KKU0_MgXaXDd26o")}


	return {
		getLink: getLink,
		getShop: function(region,shop){
			selectedShop = places[region][shop];
		},
		places: places
	}
});
