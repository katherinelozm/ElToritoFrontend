var app = angular.module('ElTorito', ['ui.router', 'ngStorage', 'ElTorito.Services', 'ElTorito.Controllers']);

angular.module('ElTorito.Controllers', []);
angular.module('ElTorito.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'HomeController'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/views/register.html',
            controller: 'HomeController'
        })
        .state('client', {
            url: '/client',
            templateUrl: '/views/client.html',
            controller: 'HomeController'
        });
}])
