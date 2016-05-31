var app = angular.module('app');

app.factory('coffeeService', function($http){
	var places = {
		downtown: [
			{
				name: 'ASHE Supply Co.',
				placeID: 'ChIJtzwfLTItO4gRxwpKgcgFomE',
				description: 'Detroit’s new kid on the coffee block, ASHE Supply Co. feels like it’s already well established in the neighborhood. Serving the many startups that share the M@dison Building, the coffee shop has blazing fast Rocket Fiber wifi. It serves up Detroit food favorites like Detroit Institute of Bagels and Sister Pie, making it a great place to work or meet up with friends.',
				features: 'house-roasted coffee, fast wifi, cool clothes, local fare',
				work: true,
				food: true,
				social: true,
				music: false,
				all: true
			},
			{
				name: 'Urban Bean Co.',
				placeID: 'ChIJt7odBjEtO4gRgRETxl3QoLE',
				description: 'The Urban Bean is a hip haven featuring mid-century modern style and DJs spinning techno and house. It’s got a second level providing ample space for you and your friends.',
				features: 'Great Lakes Coffee, beats, groovy vibe',
				work: true,
				social: true,
				food: false,
				music: true,
				all: true

			},
			{
				name: 'Roasting Plant',
				placeID: 'ChIJUwca7i8tO4gRC6azALL0VXY',
				description: 'The future is now when it comes to coffee at the Roasting Plant. Boasting a Jetsons worthy Javabot that brews your coffee, the Roasting Plant offers novelty and a good cup of coffee.',
				features: 'house-roasted coffee, , ',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true

			},
			{
				name: 'Rowland Cafe',
				placeID: 'ChIJs1AnRCUtO4gRIazc_Vjj-ss',
				description: 'Go to see the inside of the fabulous mosaic lobby of the Guardian Building, stay for the tasty coffee at the Rowland Cafe. Located in one of the most stunning buildings in Detroit, it’s a great place to visit and have a light lunch.',
				features: 'illy coffee, beautiful location, book readings',
				work: false,
				social: false,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Dessert Oasis',
				placeID: 'ChIJzZVcTTAtO4gRe5sIIK-MgJs',
				description: 'As the name implies, Dessert Oasis’ sweet treats are a welcome bonus to this Capital Park coffee shop. With ample seating options, and industrial atmosphere, it’s a great place to get to work.',
				features: '',
				work: true,
				social: true,
				food: false,
				music: false,
				all: true
			},
			{
				name: 'The Bean Bar',
				placeID: 'ChIJdyYY-zotO4gRSkl3yFB0L4U',
				description: 'The Bean Bar serves coffee, smoothies and light fare to workers in the Cobo area. You can’t miss it with its space-age sign. The hours are strictly breakfast and lunch, so don’t go looking for an evening pick-me-up.',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Detroit Athletic Club Cafe',
				placeID: 'ChIJddBmfDItO4gRRlJjD-hy6cc',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true


			}
		],
		midtown: [
			{
				name: 'The Bottom Line',
				placeID: 'ChIJOZ_JV6XSJIgRuE7W1bI52bY',
				description: '',
				features: '',
				work: false,
				social: true,
				food: true,
				music: true,
				all: true
			},
			{
				name: 'Fourteen East',
				placeID: 'ChIJ8Vn3cL3SJIgRAN16yJ9YXVc',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Great Lakes Coffee',
				placeID: 'ChIJi82DCLjSJIgRVh34r-ayWs0',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true

			},
			{
				name: 'Avalon',
				placeID: 'ChIJG1njurDSJIgRQOyfZl8DS3U',
				description: '',
				features: '',
				work: false,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'SoCRA Tea',
				placeID: 'ChIJKZ7aELnSJIgRxwOrLDpqooQ',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Kresge Court',
				placeID: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: true,
				all: true
			}
		],
		newCenter:[
			{
				name: 'Cafe Con Leche Nord',
				placeID: 'ChIJKZ7aELnSJIgRxwOrLDpqooQ',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Stella International Cafe',
				placeID: 'ChIJKZ7aELnSJIgRxwOrLDpqooQ',
				description: '',
				features: '',
				work: false,
				social: true,
				food: false,
				music: false,
				all: true
			}
		],
		corktown:[
			{
				name: 'Astro Coffee',
				placeID: 'ChIJQZSTxVktO4gR_qjDkKNYauk',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
// needs categories
			},
			{
				name: 'Anthology Coffee',
				placeID: 'ChIJp-Jg8VwtO4gRJKYZBSShFTg',
				description: '',
				features: '',
				work: true,
				social: true,
				food: false,
				music: false,
				all: true
// needs categories
			}
		],
		westVillage: [
			{
				name: 'The Red Hook',
				placeID: 'ChIJY2gfQ17TJIgRCC-Ib8eakH8',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Sister Pie',
				placeID: 'ChIJucNILWfTJIgRUonGOtN2O7Y',
				description: '',
				work: false,
				social: true,
				food: true,
				music: false,
				all: true
			},

			{
				name: 'Coffee and (___)',
				placeID: 'ChIJ6eXdWAfVJIgRw_BSGXWh7gs',
				description: '',
				features: '',
				work: false,
				social: true,
				food: true,
				music: false,
				all: true

			}
		],
		easternMarket: [
			{
				name: 'Trinosophes',
				placeID: 'ChIJw-es3tXSJIgRnzz7A_tsOOQ',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Cairo Coffee',
				placeID: 'ChIJQYrmDdfSJIgRmCFB7UeQu4Q',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Germack Coffee Roasting Co.',
				placeID: 'ChIJZS3wv9bSJIgRMcmDKePqdLQ',
				description: '',
				features: '',
				work: false,
				social: true,
				food: false,
				music: false,
				all: true
			}
		],
		rosedalePark: [
			{
				name: 'Always Brewing Detroit',
				placeID: 'ChIJ5aZkHGrKJIgR7-jlmpGsSH4',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			}
		],
		hamtramck: [
			{
				name: 'Cafe 1923',
				placeID: 'ChIJHS1-WWjSJIgR9OXqeGytqE0',
				description: '',
				features: '',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Caniff Deli Coffee LLC',
				placeID: 'ChIJbSgRrm3SJIgRGGuc10CluBQ',
				description: '',
				features: '',
				work: false,
				social: true,
				food: true,
				music: true,
				all: true
			}
		]
	};

	var selectedShop;

	var filteredPlaces = {};

	function getLink() {
		return $http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + selectedShop.placeID + "&key=AIzaSyB3qOjxMH_B5zFUt9V4KKU0_MgXaXDd26o")
	}
	function getDescription(){
		return selectedShop.description;
	}
	function getFeatures(){
		return selectedShop.features;
	}
	function getShop(region,shop){
				selectedShop = region[shop];
	}
	function selectCategory(interest){
		for (neighborhood in places){
			if(places.hasOwnProperty(neighborhood)){
				filteredPlaces[neighborhood] = places[neighborhood].filter(function(el){
					return el[interest] === true;
				});
			}
		}
		return filteredPlaces;
	}

	return {
		getDescription: getDescription,
		getFeatures: getFeatures,
		getLink: getLink,
		getShop: getShop,
		places: places,
		selectCategory: selectCategory,
	}
});
