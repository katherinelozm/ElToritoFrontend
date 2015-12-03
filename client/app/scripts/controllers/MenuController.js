angular.module('ElTorito.Controllers')
  .controller('MenuController', ['$scope', 'MenuService','$state', function ($scope, MenuService, $state) {
    	$scope.title = "El Torito";
      $scope.menuItems = [];
      $scope.menuItem = {};

      $scope.getMenuItem = function(){
        MenuService.GetMenuItem().then(function(response){
          $scope.menuItems = response.data;
        }).catch(function(err){
          alert('Error fetching menuItems')
        });
      }

      $scope.postMenuItems = function(){
        MenuService.PostMenuItems($scope.menuItem).then(function(response){
          alert("Posted to /menuItems");
        }).catch(function(err){
          alert("Error posting to menuItems");
        });
      }

      $scope.Home = function(){
        $state.go('home')
      }
  }]);
