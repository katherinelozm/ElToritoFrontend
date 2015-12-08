angular.module('ElTorito.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://eltoritobackend.herokuapp.com/';
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
		        }
	    };
}]);
