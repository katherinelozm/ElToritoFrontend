angular.module('ElTorito.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://Dellilah:8000';

		return {
				GetUsers: function(){
					return $http.get(baseUrl + "v1/users");
				},
				Logout: function(){
					return $http.get(baseUrl + "v1/logout");
				},
				Login: function(payload){
					return $http.post(baseUrl + "v1/login", payload);
				},
		        Register: function(payload){
		          return $http.post(baseUrl + "v1/register", payload);
		        },
		        Quote : function(payload) {
		        	return $http.post(baseUrl + "v1/quoteRequest", payload);
		        },
		        Reservation : function(payload) {
		        	return $http.post(baseUrl + "v1/reservationRequest", payload);
		        },

		        GetReservations: function(){
					return $http.get("v1/reservations");
				},
				PostReservations: function(payload){
					return $http.post("v1/reservations", payload);
				},
				GetUsers2: function(){
					return $http.get("v1/users");
				},
				PostUsers: function(payload){
					return $http.post("v1/users", payload);
				}
	    };
}]);
