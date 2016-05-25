var app = angular.module('app');

app.factory('coffeeService', function($http){
	var places = {
		downtown: 
			[
				{
				name: 'ASHE Supply Co.',
				placeID: 'ChIJtzwfLTItO4gRxwpKgcgFomE',
				description: 'blah',
				features: '',
				music: false,
				food: true
				},
				{
				name: 'Urban Bean Co.',
				placeID: 'ChIJt7odBjEtO4gRgRETxl3QoLE',
				description: '',
				features: '',
				music: true,
				food: false,
				social: true
				},
				{
				name: 'Roasting Plant',
				placeID: 'ChIJUwca7i8tO4gRC6azALL0VXY',
				description: '',
				features: '',
				music: true,
				work: true,
				art: true
				},
				{
				name: 'Rowland Cafe',
				placeID: 'ChIJs1AnRCUtO4gRIazc_Vjj-ss',
				description: '',
				features: '',
				work: true,
				food: true
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
		midtown: [  
			{
			name: 'The Bottom Line',
			placeID: 'ChIJOZ_JV6XSJIgRuE7W1bI52bY',
			description: '',
			features: '',
			food: true,
			music: false
			},
			{
			name: 'Fourteen East',
			placeID: 'ChIJ8Vn3cL3SJIgRAN16yJ9YXVc',
			description: '',
			features: '',
			food: true,
			art: true
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
			}
		],
		newCenter:[ 
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
			}
		],
		corktown:[ 
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
			}
		],
		westVillage: [
			{
			name: 'The Red Hook',
			placeID: 'ChIJY2gfQ17TJIgRCC-Ib8eakH8',
			description: '',
			features: ''
			}
		],
		jefferson: [
			{
			name: 'Coffee and (___)',
			placeID: 'ChIJ6eXdWAfVJIgRw_BSGXWh7gs',
			description: '',
			features: ''
			}
		],
		easternMarket: [
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
			}
		],
		rosedalePark: [
			{
			name: 'Always Brewing Detroit',
			placeID: 'ChIJ5aZkHGrKJIgR7-jlmpGsSH4',
			description: '',
			features: ''
			}
		],
		hamtramck: [
			{
			name: 'Cafe 1923',
			placeID: 'ChIJHS1-WWjSJIgR9OXqeGytqE0',
			description: '',
			features: ''
			}
		]
	};

	var selectedShop;


	var filteredPlaces = {};


	function getLink() {
		return $http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + selectedShop.placeID + "&key=AIzaSyB3qOjxMH_B5zFUt9V4KKU0_MgXaXDd26o")
	}

	return {
		getLink: getLink,
		getShop: function(region,shop){
			console.log(region[shop]);
			selectedShop = region[shop];

		},
		places: places,
		selectCategory: function(interest){
			for (neighborhood in places){
				if(places.hasOwnProperty(neighborhood)){
					filteredPlaces[neighborhood]= places[neighborhood].filter(function(el){
						return el[interest] === true;
					});
				}
			}
			console.log(filteredPlaces);
		
			return filteredPlaces;
		},
	}
});
