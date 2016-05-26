var app = angular.module('app');

app.factory('coffeeService', function($http){
	var places = {
		downtown: 
			[
				{
				name: 'ASHE Supply Co.',
				placeID: 'ChIJtzwfLTItO4gRxwpKgcgFomE',
				description: 'Detroit’s new kid on the coffee block, ASHE Supply Co. feels like it’s already well established in the neighborhood. Servicing the many startups that share the Madison Building, the coffee shop has blazing fast Rocket Fiber wifi. It serves up Detroit food favorites like Detroit Institute of Bagels and Sister Pie.',
				features: '',
				music: false,
				food: true
				},
				{
				name: 'Urban Bean Co.',
				placeID: 'ChIJt7odBjEtO4gRgRETxl3QoLE',
				description: 'The Urban Bean is a hip haven featuring mid-century modern style and DJs spinning techno and house. It’s got a second level providing ample space for you and your friends.',
				features: '',
				music: true,
				food: false,
				social: true
				},
				{
				name: 'Roasting Plant',
				placeID: 'ChIJUwca7i8tO4gRC6azALL0VXY',
				description: 'The future is now when it comes to coffee at the Roasting Plant. Boasting a Jetsons worthy Javabot that brews your coffee, the Roasting Plant offers novelty and a good cup of coffee.',
				features: '',
				music: true,
				work: true,
				art: true
				},
				{
				name: 'Rowland Cafe',
				placeID: 'ChIJs1AnRCUtO4gRIazc_Vjj-ss',
				description: '',
				features: 'Go to see the inside of the fabulous mosaic lobby of the Guardian Building, stay for the tasty coffee at the Rowland Cafe. Located in one of the most stunning buildings in Detroit, it’s a great place to visit and have a light lunch.',
				work: true,
				food: true
				},
				{
				name: 'Dessert Oasis',
				placeID: 'ChIJzZVcTTAtO4gRe5sIIK-MgJs',
				description: 'As the name implies, Dessert Oasis’ sweet treats are a welcome bonus to this Capital Park coffee shop. With ample seating options, and industrial atmosphere, it’s a great place to get to work.',
				features: '',
				social: true
				},
				{
				name: 'The Bean Bar',
				placeID: 'ChIJdyYY-zotO4gRSkl3yFB0L4U',
				description: 'The Bean Bar serves coffee, smoothies and light fare to workers in the Cobo area. You can’t miss it with it’s space-age sign. The hours are strictly breakfast and lunch, so don’t go looking for an evening pick-me-up.',
				features: '',
				art: true
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
		getDescription: function(){
			console.log("get description" + selectedShop.description);
			return selectedShop.description;
		},
		getLink: getLink,
		getShop: function(region,shop){
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
			return filteredPlaces;
		},
	}
});
