var app = angular.module('app');

app.factory('coffeeService', function($http){
	var places = {
		downtown: [
			{
				name: 'ASHE Supply Co.',
				placeID: 'ChIJtzwfLTItO4gRxwpKgcgFomE',
				instagramID: '180026',
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
				instagramID: false,
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
				instagramID: false,
				description: 'The future is now when it comes to coffee at the Roasting Plant. Boasting a Jetsons worthy Javabot that brews your coffee, the Roasting Plant offers novelty and a good cup of coffee.',
				features: 'house-roasted coffee, mad-scientist vibe, pneumatic tubes',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true

			},
			{
				name: 'Rowland Cafe',
				placeID: 'ChIJs1AnRCUtO4gRIazc_Vjj-ss',
				instagramID: false,
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
				instagramID: false,
				description: 'As the name implies, Dessert Oasis’ sweet treats are a welcome bonus to this Capital Park coffee shop. With ample seating options, and industrial atmosphere, it’s a great place to get to work.',
				features: 'house-roasted coffee, live music, treats',
				work: true,
				social: true,
				food: false,
				music: false,
				all: true
			},
			{
				name: 'The Bean Bar',
				placeID: 'ChIJdyYY-zotO4gRSkl3yFB0L4U',
				instagramID: false,
				description: 'The Bean Bar serves coffee, smoothies and light fare to workers in the Cobo area. You can’t miss it with its space-age sign. The hours are strictly breakfast and lunch, so don’t go looking for an evening pick-me-up.',
				features: 'full menu, open early',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Detroit Athletic Club Cafe',
				placeID: 'ChIJddBmfDItO4gRRlJjD-hy6cc',
				instagramID: false,
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
				instagramID: false,
				description: 'Coffee and late-night studying go hand in hand; thankfully Wayne State University students have The Bottom Line nearby to keep them going. The shop offers a cozy spot for working or chatting with friends. ',
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
				instagramID: false,
				description: 'Located in the Park Shelton, Fourteen East is located in the cultural center of Midtown. The shop is in a clean, bright space that functions as a gallery as well. ',
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
				instagramID: '180615',
				description: 'As far as coffee shops go, Great Lakes Coffee is the place to see and be seen in Detroit. This popular spot has coffee AND a bar that features high quality craft cocktails and local brews. ',
				features: 'house-roasted coffee, unique food, fast wifi',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true

			},
			{
				name: 'Avalon',
				placeID: 'ChIJG1njurDSJIgRQOyfZl8DS3U',
				instagramID: false,
				description: 'An anchor in the Cass Corridor community for almost 20 years, Avalon International Breads is known for their organic baked goods, but also serves up a good coffee drink.',
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
				instagramID: false,
				description: 'SoCRA Tea is technically a tea shop, but it gets a pass. It serves a wide variety of teas in a warm, inviting space. Next door is a ceramics studio and you will find the fruits of their labors for sale in the tea shop.',
				features: 'spacious, ',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Kresge Court',
				placeID: 'ChIJS7U-t73SJIgRvBSlnz2MV3g',
				instagramID: false,
				features: 'Nestled inside the Detroit Institute of Arts, Kresge Court offers a great location for a break from your art expedition. If you live in the tri-county area, museum entrance is free, so it’s easy stop at the cafe to work or have lunch. With lots of natural light, the courtyard gives you that “outside” feel year round.',
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
				instagramID: false,
				description: 'The beloved Southwest Cafe Con Leche is no more, but thankfully Jordi is still serving up coffee at the new location on Grand Boulevard. The Nord location mixes exposed brick with modern details for an inviting space. It’s a great place to work inside or sit outside in New Center Park in nice weather.',
				features: 'house-roasted coffee, conference room, pop-ups',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Stella International Cafe',
				placeID: 'ChIJKZ7aELnSJIgRxwOrLDpqooQ',
				instagramID: false,
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
				instagramID: false,
				description: 'Sure Corktown has Slow’s, but it also has Astro Coffee, which brought the neighborhood’s cool factor up another notch. If you are looking to have a stellar coffee and pastry, you are in the right place. The shop is small and does not have free wifi, so focus on a book or a discussion with that blind date.',
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
				instagramID: false,
				description: 'Located in Ponyride, Anthology Coffee serves up quality coffee drinks.',
				features: 'house-roasted coffee, ',
				work: true,
				social: true,
				food: false,
				music: false,
				all: true
// needs categories
			}
		],
	
		easternMarket: [
			{
				name: 'Trinosophes',
				placeID: 'ChIJw-es3tXSJIgRnzz7A_tsOOQ',
				instagramID: false,
				description: 'Trinosophes is on Gratiot on a block that is quickly becoming one of the hippest spots in Detroit. Their next-door neighbor is Peoples Records and there is a collaboration between the two shops. Trinosophes is a performance venue, gallery, and they have a full menu with delicious fresh food. ',
				features: 'Anthology Coffee and Just Coffee Cooperative, live music, artsy vibe',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			},
			{
				name: 'Cairo Coffee',
				placeID: 'ChIJQYrmDdfSJIgRmCFB7UeQu4Q',
				instagramID: false,
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
				instagramID: false,
				description: 'Germack has been in Detroit’s Eastern Market for over 90 years. The business started and flourished as a nut company, but added coffee and spices to the mix in recent years. All of their products are top notch.',
				features: 'house-roasted coffee, pistachios, industrial vibe',
				work: false,
				social: true,
				food: false,
				music: false,
				all: true
			},
			{
				name: 'The Red Hook',
				placeID: 'ChIJY2gfQ17TJIgRCC-Ib8eakH8',
				instagramID: false,
				description: '',
				features: 'Stumptown Coffee, Pinwheel pastries, bright light',
				work: true,
				social: true,
				food: true,
				music: false,
				all: true
			}
		]

	};

	var selectedShop;

	var filteredPlaces = {};

	function getLink() {
		return $http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + selectedShop.placeID + "&key=AIzaSyB3qOjxMH_B5zFUt9V4KKU0_MgXaXDd26o")
	}

	function getInstagram(){
		return selectedShop.instagramID;
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
		getInstagram: function(){
			return "https://snapwidget.com/embed/" + getInstagram()
		},
		getLink: getLink,
		getShop: getShop,
		places: places,
		selectCategory: selectCategory,
	}
});
