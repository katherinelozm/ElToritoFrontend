angular.module('ElTorito.Services').factory('MenuService', ['$http',
	function($http){
		return {
				GetMenuItems: function(){
					return $http.get("v1/menuItem");
				},
				PostMenuItems: function(payload){
					return $http.post("v1/menuItem", payload);
				}
	    };
}]);
