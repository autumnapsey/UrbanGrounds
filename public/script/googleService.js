var app = angular.module('app');

app.factory('apiService', function($http){
	return $http.get(
"https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJtzwfLTItO4gRxwpKgcgFomE&key=AIzaSyB3qOjxMH_B5zFUt9V4KKU0_MgXaXDd26o"
		
	});




<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3qOjxMH_B5zFUt9V4KKU0_MgXaXDd26o&libraries=places"></script>
