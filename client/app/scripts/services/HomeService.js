angular.module('ElTorito.Services').factory('HomeService', ['$http',
	function($http){
		return {
				GetUsers: function(){
					return $http.get("v1/users");
				},
				Logout: function(){
					return $http.get("v1/logout");
				},
				Login: function(payload){
					return $http.post("v1/login", payload);
				},
		        Register: function(payload){
		          return $http.post("v1/register", payload);
		        }
	    };
}]);
