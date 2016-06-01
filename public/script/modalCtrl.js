var app = angular.module('app');

app.controller('modalCtrl', function($scope, coffeeService, ngDialog, $location){
    $scope.clickForAbout = function (){
        ngDialog.open({
            template: '../view/about.html',
            className: 'ngdialog-theme-default',
            width: '80%'
        });
    };
});
