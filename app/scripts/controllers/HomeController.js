angular.module('ElTorito.Controllers')
  .controller('HomeController', ['$scope', '$rootScope', '$sessionStorage', 'HomeService',  '$state', function ($scope, $rootScope, $sessionStorage, HomeService, $state) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.logout = function(){
        HomeService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){
        HomeService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
          $state.go('client')
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.register = function(){
        var user = {name: $scope.user.name, email: $scope.user.email, number: $scope.user.number, password: $scope.user.password, scope: ['client']};
        HomeService.Register(user).then(function(response){
          alert('Registered in correctly!');
          $scope.login({email: user.email, password: user.password});
          $state.go('client')
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.Home = function(){
        $state.go('home')
      }

      $scope.Register = function(){
        $state.go('register')
      }

      $scope.Login = function(){
        $state.go('login')
      }

      $scope.Client = function(){
        $state.go('client')
      }

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isClient = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('client') > -1;
      }
  }]);