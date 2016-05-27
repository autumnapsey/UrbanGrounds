var app = angular.module('app');

app.controller('displayCtrl', function($scope, coffeeService) {
	coffeeService.getLink().then(function(location){
		$scope.coffeeShop = location.data.result;
		$scope.getDescription = coffeeService.getDescription;
		$scope.openNow = function(){
			if(location.data.result.opening_hours.open_now === true){
				return "Open Now";
			} else {
				return "Currently Closed";
			}
		};
		(function(d,s,id){
        var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
        if(!d.getElementById(id)){
            js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js,fjs);}}
    		(document, 'script', 'twitter-wjs'));
	});
});