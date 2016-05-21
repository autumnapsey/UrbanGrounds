var app = angular.module('app',);

app.controller('selectCtrl', function($scope, coffeeService) {
	console.log('hello from the selectCtrl!');
	console.log(coffeeService);
});




//var myApp = angular.module('myApp',[]);

//filter functions below-Veronica

myApp.filter('exactMatch', function() {
    return function(shops, pattern) {
        var result = [];
        shops.forEach(function (shop) {
            if (shop.goodfor === pattern) {
                result.push(shop);
            }
        });                
        return result;
    }
});

function MyCtrl($scope) {
    $scope.shops = [
        {name: "UB", goodfor: "music"},
        {name: "Starb", goodfor: "work"},
        {name: "Grindhouse", goodfor: "music"},
        {name: "coffee", goodfor: "studying"},
        {name: "ashe coffee supply", goodfor: "friends"},
    ];
}